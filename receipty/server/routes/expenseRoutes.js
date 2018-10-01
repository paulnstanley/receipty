const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
// const mongoose = require('mongoose');
// const requireLogin = require('../middlewares/requireLogin');

//dataSore is a file that will handle all of the mongodb sorting/filtering/saving...anything related to the DB.  This is why we don't need to require in mongoose in this file
//by requiring in the datastore/expenses_datastore, we are essentially bringing in all functions from that file and are using them in our 
const expensesDatastore = require('../datastore/Expenses_datastore');
const usersDatastore = require('../datastore/Users_datastore');

const expensesRouter = require('express').Router();

//TODO: remove, this was for testing (later we will need /api/me/get and more error handling)
expensesRouter.get('/api/expenses', function (request, response) {
  //because using express you can shorten the reponse.writehead and response.end to this:
  response.json(expensesDatastore.GetAllExpenses());
})


// //REQUEST WILL INCLUDE user token whenever we implement auth
// //for now, we will substitute user id for user token
// expensesRouter.get('/api/me/:userId/expenses', function(request, response){
//   let id = request.params.id;
//   let user = usersDatastore.GetUserById(id);
  
//   response.json(expensesDatastore.GetExpenseByUserId(user));
// })

//Given an expense model (already defined but sent as json in request) and a user userId (sent in the request) Returns expenses from a particular userId 
//TODO: THIS WILL NEED TO BE EDITED TO VALIDATE CURRENT USER SO WE MAY NOT NEED TO REQUEST WITH PARAM ID BUT CAN SEND THE TOKEN, MATCH THAT TOKEN WITH A USER AND SEARCH FOR THE USER THAT WAY????? (THIS SEEMS RIGHT, BUT IDK)
expensesRouter.post('/api/expenses/:userId', function (request, response) {
  //define the user id sent in the request
  let id = request.params.userId;

  //define what wll be saved
  let expenseModel = {
    merchant: request.body.merchant,
    amount: request.body.amount,
    createdDate: request.body.createdDate,
    category: request.body.category,
    reciept_img: request.body.reciept_img,
    comments: request.body.comments,
    reimbursedDate: request.body.reimbursedDate,
    userId: request.params.userId,
    reportId: request.body.reportId
  };
  //use the datastore function to save to the database
  expensesDatastore.SaveExpense(expenseModel);

  usersDatastore.AddExpenseToUserArray(id, expenseModel);

  //respond with a 200 message that the item was saved
  response.end(console.log('200: the expense was saved!'));
})

module.exports = expensesRouter;