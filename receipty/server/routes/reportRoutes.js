const _ = require('lodash');
const { URL } = require('url');
const requireLogin = require('../middleware/requireLogin');

const reportsDatastore = require('../datastore/Reports_datastore');
const usersDatastore = require('../datastore/Users_datastore');
const reportsRouter = require('express').Router();

//get a single report back based on it's id
reportsRouter.get('/api/reports/:_id', function (request, response) {
  let _id = request.params._id;
  reportsDatastore.GetReportById(_id).then(reportById => response.json(reportById));
})

//post api/reports will save a particular user's report to the the DB
//the request will include the user's id and so in addition to saveing this we will also need to associated by the id sent in the request with a user
reportsRouter.post('/api/reports', requireLogin, function (request, response) {
  //define the user id sent in the request
  let userId = request.user._id

  //expenseModel = request.body.amount;

  //  name: String,
  // totalAmount: Number,
  // fromUser: Schema.ObjectId,
  // toAdmin: Schema.ObjectId,
  // requestedDate: String,
  // reportCreatedDate: { type: Date, default: Date.now },
  // reimbursementDate: String,
  // reimbursementStatus: String,
  // userId: Schema.ObjectId,
  // expenses: [Schema.ObjectId]

  let reportModel = {
    name: request.body.name,
    totalAmount: request.body.totalAmount,
    fromUser: request.body.fromUser,
    toAdmin: request.body.toAdmin,
    requestedDate:request.body.requestedDate,
    reportCreatedDate: request.body.reportCreatedDate,
    reimbursementDate: request.body.reimbursementDate,
    reimbursementStatus: request.body.reimbursementStatus,
    userId: request.body.userId,
    expenses: request.body.expenses
  };

  reportsDatastore.SaveReport(reportModel);

  //respond with a 200 message that the item was saved
  response.end(console.log('200: the report was saved!'));
})

// return all of a user’s reports for a given user id
reportsRouter.get('/api/user/reports', function (request, response) {
  // let userId = request.user._id
  let userId = request.user._id;

  reportsDatastore.GetReportsByUserId(userId)
    .then(reportsByUserId => response.json(reportsByUserId));
});


//get a single report back based on it's report _id
reportsRouter.get('/api/reports/:_id', function (request, response) {
  let _id = request.params._id;
  reportsDatastore.GetReportById(_id).then(reportById => response.json(reportById));
})

reportsRouter.post('/api/reports/:reportId/expenses', function (request, response) {
  let userId = request.user._id;
  let reportId = request.params.reportId;
  //body is going to contain an array of expenses Ids
  let expenses = request.body.expenses;

  reportsDatastore.AddExpenseToReportExpenseArray(userId, reportId, expenses)
  .then(userReportExpense => response.json(userReportExpense));
});

reportsRouter.post('/api/reports/:reportId/approve', function (request, response) {
  console.log(request.params)
  const status = true;
  reportsDatastore.SetReportStatus(request.params, status)
  .then(console.log('Approved'))
})

reportsRouter.post('/api/reports/:reportId/reject', function (request, response) {
  console.log(request.params)
  const status = false;
  reportsDatastore.SetReportStatus(request.params, status)
  .then(console.log('Rejected'))
})

module.exports = reportsRouter;
