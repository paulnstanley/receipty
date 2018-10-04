const _ = require('lodash');
const { URL } = require('url');
const requireLogin = require('../middleware/requireLogin');

// const requireLogin = require('../middlewares/requireLogin');

//dataSore is a file that will handle all of the mongodb sorting/filtering/saving
const expensesDatastore = require('../datastore/Expenses_datastore');
const usersDatastore = require('../datastore/Users_datastore');
const expensesRouter = require('express').Router();


expensesRouter.get('/api/user/expenses', function (request, response) {
  
  // let UID = request.user._id
  let UID = "5bb65b0251823f580cf2040d";
  //because using express you can shorten the reponse.writehead and response.end to this:
<<<<<<< HEAD
  expensesDatastore.GetExpensesByUserId(UID)
    .then(expensesByUserId => response.json(expensesByUserId));
=======
  expensesDatastore.GetExpensesByUserId(UID).then(expenses => {
    response.json(expenses);
  });
>>>>>>> master
})

// expensesRouter.get('/api/user/:user/expenses', function (request, response) {
//   let userId= request.user._id
//   console.log(request.params.userId);
//   // let expenses = expensesDatastore.GetExpensesByUserId(user);
//   expensesDatastore.GetExpensesByUserId(userId)
//   .then(expensesByUserId => response.json(expensesByUserId));
  
// })
//At this time we do not need get one particular expense
// expensesRouter.get('/api/user/expenses/:expenseId', requireLogin, function (request, response) {
//   let theUser = request.user._id;
//   let theExpense = request.params.expenseId;


//   expensesDatastore.GetUniqueExpenseByUserId(theUser, theExpense).then(userExpense => response.json(userExpense));
// })


expensesRouter.get('/api/reports/:reportId/expenses', function (request, response) {
  let reportId = request.params.reportId;
  expensesDatastore.GetAllExpensesByReportId(reportId).then(expensesInReport => response.json(expensesInReport));
});

//Given an expense model (already defined but sent as json in request and a user userId (sent in the request) Returns expenses from a particular userId 
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
<<<<<<< HEAD

=======
>>>>>>> master
  //respond with a 200 message that the item was saved
  response.end(console.log('200: the expense was saved!'));
});


// expensesRouter.post('/api/reports/:reportId/expenses', function (request, response) {
//   let reportId = request.params.reportId;
//   //body is going to contain an array of expense Ids
//   let populatedReportModel = {
//     expenses: request.body.expenses
//   }

//   for (let expenseId of populatedReportModel.expenses ){
//     console.log(expenseId);
//     expensesDatastore.PostExpenseInReport(reportId, expenseId)
//     }
//   (userReportExpense => response.json(userReportExpense));
// });


module.exports = expensesRouter;