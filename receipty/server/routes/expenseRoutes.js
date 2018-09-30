const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
// const mongoose = require('mongoose');
// const requireLogin = require('../middlewares/requireLogin');

//dataSore is a file that will handle all of the mongodb sorting/filtering/saving...anything related to the DB.  This is why we don't need to require in mongoose in this file
//by requiring in the datastore/expenses_datastore, we are essentially bringing in all functions from that file and are using them in our 
const datastore = require('../datastore/Expenses_datastore');

const expensesRouter = require('express').Router();

//TODO: remove, this was for testing (later we will need /api/me/get and more error handling)
expensesRouter.get('/api/expenses', function (request, response) {
  //because using express you can shorten the reponse.writehead and response.end to this:
  response.json(datastore.GetAllExpenses());
})


expensesRouter.post('/api/expenses'), function (request, response) {
  //expenseModel = request.body.amount;
  let expenseModel = {
    merchant: request.body.merchant,
    amount: request.body.amount,
    createdDate: request.body.createdDate,
    category: request.body.category,
    reciept_img: request.body.reciept_img,
    comments: request.body.comments,
    reimbursedDate: request.body.reimbursedDate
  };

  datastore.SaveExpense(expenseModel);


  //respond with a 200 message that the item was saved
  response.end(console.log('200: the expense was saved!'));
})

module.exports = expensesRouter;