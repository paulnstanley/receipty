const _ = require('lodash');
const { URL } = require('url');
const requireLogin = require('../middleware/requireLogin');

// const mongoose = require('mongoose');

// const requireLogin = require('../middlewares/requireLogin');

//dataSore is a file that will handle all of the mongodb sorting/filtering/saving
const expensesDatastore = require('../datastore/Expenses_datastore');
const usersDatastore = require('../datastore/Users_datastore');

const expensesRouter = require('express').Router();


expensesRouter.get('/api/user/expenses', function (request, response) {
  let UID = request.user._id
  //because using express you can shorten the reponse.writehead and response.end to this:
  expensesDatastore.GetExpensesByUserId(UID)
    .then(expensesByUserId => response.json(expensesByUserId));
});

expensesRouter.get('/api/reports/:reportId/expenses', function (request, response) {
  let reportId = request.params.reportId;

  expensesDatastore.GetAllExpensesByReportId(reportId).then(expensesInReport => response.json(expensesInReport));
});

//Given an expense model (already defined but sent as json in request and a user userId (sent in the request) Returns expenses from a particular userId 
//TODO: THIS WILL NEED TO BE EDITED TO VALIDATE CURRENT USER SO WE MAY NOT NEED TO REQUEST WITH PARAM ID BUT CAN SEND THE TOKEN, MATCH THAT TOKEN WITH A USER AND SEARCH FOR THE USER THAT WAY????? (THIS SEEMS RIGHT, BUT IDK)
expensesRouter.post('/api/expenses/', requireLogin,  function (request, response) {
  //define the user id sent in the request
  // let id = request.user._id;

  let id = request.user._id

  //expense date and expense id should auto save
  let expenseModel = {
    merchant: request.body.merchant,
    amount: request.body.amount,
    category: request.body.category,
    reciept_img: request.body.reciept_img,
    comments: request.body.comments,
    userId: id,
    reportId: request.body.reportId
  };
  //use the datastore function to save to the database
  expensesDatastore.SaveExpense(expenseModel);

  //respond with a 200 message that the item was saved
  response.end(console.log('200: the expense was saved!'));
})

expensesRouter.post('/api/reports/:reportId/expenses', function (request, response) {
  let reportId = request.params.reportId;

  //body is going to contain an array of expense Ids
  let populatedReportModel = {
    expenses: request.body.expenses
  }

  for (let expenseId of populatedReportModel.expenses ){
    console.log(expenseId)
  };
  // expensesDatastore.PostExpenseInReport(reportId).then(userReportExpense => response.json(userReportExpense));
})


module.exports = expensesRouter;