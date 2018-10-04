const _ = require('lodash');
const { URL } = require('url');
const requireLogin = require('../middleware/requireLogin');

// const mongoose = require('mongoose');
// const requireLogin = require('../middlewares/requireLogin');

// changing 'datastore' to 'reportsDatastore' to not have a 'datastore' in each route file
const reportsDatastore = require('../datastore/Reports_datastore');
const usersDatastore = require('../datastore/Users_datastore');

const reportsRouter = require('express').Router();

//TODO: DELETE THIS BECAUSE IT IS FOR TESTING ONLY
reportsRouter.get('/api/reports', requireLogin, function (request, response) {
  let UID = request.user._id
  //because using express you can shorten the reponse.writehead and response.end to this:
  response.json(reportsDatastore.GetAllReports(UID));
})

//get a single report back based on it's id
reportsRouter.get('/api/reports/:_id', function (request, response) {
  let _id = request.params._id;
  reportsDatastore.GetReportById(_id).then(reportById => response.json(reportById));
})

//post api/reports will save a particular user's report to the the DB
//the request will include the user's id and so in addition to saveing this we will also need to associated by the id sent in the request with a user
reportsRouter.post('/api/reports/', requireLogin, function (request, response) {
  //define the user id sent in the request
  let id = request.user._id;

  //expenseModel = request.body.amount;
  let reportModel = {
    name: request.body.name,
    totalAmount: request.body.total,
    fromUser: request.body.fromUser,
    toAdmin: request.body.toAdmin,
    requestedDate: request.body.submittedDate,
    userId: id,
    reimbursementDate: request.body.reimbursementDate,
  };

  reportsDatastore.SaveReport(reportModel);



  //respond with a 200 message that the item was saved
  response.end(console.log('200: the report was saved!'));
})

// GET / api / user /: userId / reports
// return all of a user’s reports for a given user id
reportsRouter.get('/api/user/reports', function (request, response) {
  let userId = request.user._id
  console.log(request.params.userId);
  // let expenses = expensesDatastore.GetExpensesByUserId(user);
  reportsDatastore.GetReportsByUserId(userId)
    .then(reportsByUserId => response.json(reportsByUserId));
})

reportsRouter.put('/api/reports/addExpense/:reportId', function (request, response) {

})

module.exports = reportsRouter;