const _ = require('lodash');
const { URL } = require('url');
// const requireLogin = require('../middlewares/requireLogin');

//dataSore is a file that will handle all of the mongodb sorting/filtering/saving
const expensesDatastore = require('../datastore/Expenses_datastore');
const usersDatastore = require('../datastore/Users_datastore');

const expensesRouter = require('express').Router();

//TODO: remove, this was for testing (later we will need /api/me/get and more error handling)
expensesRouter.get('/api/expenses', function (request, response) {
  //because using express you can shorten the reponse.writehead and response.end to this:
  response.json(expensesDatastore.GetAllExpenses());
})

expensesRouter.get('/api/user/:userId/expenses', function (request, response) {
  let userId= request.params.userId
  console.log(request.params.userId);
  // let expenses = expensesDatastore.GetExpensesByUserId(user);
  expensesDatastore.GetExpensesByUserId(userId)
  .then(expensesByUserId => response.json(expensesByUserId));
})

expensesRouter.get('/api/user/:userId/expenses/:expenseId', function (request, response) {
  let theUser = request.params.userId;
  let theExpense = request.params.expenseId;

  expensesDatastore.GetUniqueExpenseByUserId(theUser, theExpense).then(userExpense => response.json(userExpense));
})

//Given an expense model (already defined but sent as json in request and a user userId (sent in the request) Returns expenses from a particular userId 
//TODO: THIS WILL NEED TO BE EDITED TO VALIDATE CURRENT USER SO WE MAY NOT NEED TO REQUEST WITH PARAM ID BUT CAN SEND THE TOKEN, MATCH THAT TOKEN WITH A USER AND SEARCH FOR THE USER THAT WAY????? (THIS SEEMS RIGHT, BUT IDK)
expensesRouter.post('/api/expenses/:userId', function (request, response) {
    //define the user id sent in the request
  let id = request.params.userId;

  //expense date and expense id should auto save
  let expenseModel = {
    merchant: request.body.Merchant,
    amount: request.body.Amount,
    category: request.body.Category,
    reciept_img: request.body.Reciept_img,
    comments: request.body.Comments,
    userId: request.params.UserId,
    reportId: request.body.ReportId
  };
  //use the datastore function to save to the database
  expensesDatastore.SaveExpense(expenseModel);

  // usersDatastore.AddExpenseToUserArray(id, expenseModel);

  //respond with a 200 message that the item was saved
  response.end(console.log('200: the expense was saved!'));
})

//expensesRouter.put('/api/expenses/ex')

module.exports = expensesRouter;