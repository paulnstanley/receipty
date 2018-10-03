const _ = require('lodash');
const { URL } = require('url');
// const mongoose = require('mongoose');
// const requireLogin = require('../middlewares/requireLogin');

// changing 'datastore' to 'reportsDatastore' to not have a 'datastore' in each route file
const reportsDatastore = require('../datastore/Reports_datastore');
const usersDatastore = require('../datastore/Users_datastore');

const reportsRouter = require('express').Router();

//TODO: DELETE THIS BECAUSE IT IS FOR TESTING ONLY
reportsRouter.get('/api/reports', function (request, response) {
  //because using express you can shorten the reponse.writehead and response.end to this:
  response.json(reportsDatastore.GetAllReports());
})

//TODO: test this endpoint!
reportsRouter.post('/api/expenses/:expenseId/report/:reportId', function (request, response) {
  let theExpense = request.params.expenseId;
  let theReport = request.params.reportId;

  expensesDatastore.PostExpenseInReport(theExpense, theReport).then(userExpense => response.json(userExpense));
})

// TODO:
// reportsRouter.post('/api/sendReport', function (request, response) {
// })


//post api/reports will save a particular user's report to the the DB
//the request will include the user's id and so in addition to saveing this we will also need to associated by the id sent in the request with a user
reportsRouter.post('/api/report', function (request, response) {
  // //define the user id sent in the request
  // let id = request.params.userId;
  
  //expenseModel = request.body.amount;
  let reportModel = {
    ReportName: request.body.name,
    ReportAmountTotal: request.body.total,
    UserName: request.body.userName, 
    UserId: request.body.userId, 
    ReportCreatedDate: request.body.reportCreatedDate, 
    DateSentToOrganization: request.body.dateSentToOrganization, 
    ReimbursementDate: request.body.reimbursementDate, 
    Organization: request.body.organization, 
  };
 

  reportsDatastore.SaveReport(reportModel);

  //respond with a 200 message that the item was saved
  response.end(console.log('200: the report was saved!'));
})

// GET / api / user /: userId / reports
// return all of a user’s reports for a given user id
reportsRouter.get('/api/user/:userId/reports', function (request, response) {
  let userId = request.params.userId
  console.log(request.params.userId);
  // let expenses = expensesDatastore.GetExpensesByUserId(user);
  reportsDatastore.GetReportsByUserId(userId)
    .then(reportsByUserId => response.json(reportsByUserId));
})

reportsRouter.put('/api/reports/addExpense/:reportId', function (request, response) {

})

module.exports = reportsRouter;