const mongoose = require('mongoose');


/*==========================================================
the datastore/Expenses.js file will handle all of the database search/filter/sort/save for Expenses.  Export the functions as an object so as not to overwrite any of them.  

Right now, this is saving in memory so anything will be lost if the server restarts.  it's ok for testing and is good because when we change this to actually communicate with the db we won't need to change any other files other than those in the datastore folder
============================================================*/

//mongoose is a persistant database
//in memory data is temporary

var expenses = require('../dataFiles/expenses.json');
var users = require('../dataFiles/users.json');

//require in Expense model (DB data)
var Expense = require('../models/Expense.js')


// will need to change these functions to search for a unique user's 
// expenses in their users.json 'expenses' array
const GetAllExpenses = function() {
    return expenses;
}

//a function that will find an expense by its id
const GetExpensesByUserId = function(userId) {
    // //do some filtering by id....
    // return expenses.filter(expense => expense._id == id);
    //let {user}= userId;

    //****delete later after testing */
    // let query = Expense.find({userId : new mongoose.Types.ObjectId(userId)});
    // return query.exec();

    let query = Expense.find({userId : userId});
    return query.exec();
}

//a function that will add an expense to the in memory storage (or db)
const SaveExpense = function(expenseModel) {

    //**** SAVE TO MONGODB NOT TO IN MEMORY */
    const expense = new Expense({
        merchant: expenseModel.merchant,
        amount: expenseModel.amount,
        category: expenseModel.category,
        receipt_img: expenseModel.reciept_img,
        comments: expenseModel.comments,
        userId: expenseModel.userId,
        reportId: expenseModel.reportId
    });

    return expense.save();

    /** ******** COMMENT OUT ABOVE TO USE WITH IN MEMEORY ***** */

    // expenses.push(expenseModel);
}

module.exports = {
    GetAllExpenses,
    SaveExpense,
    GetExpensesByUserId
}