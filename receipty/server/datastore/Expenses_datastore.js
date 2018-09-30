const mongoose = require('mongoose');


/*==========================================================
the datastore/Expenses.js file will handle all of the database search/filter/sort/save for Expenses.  Export the functions as an object so as not to overwrite any of them.  

Right now, this is saving in memory so anything will be lost if the server restarts.  it's ok for testing and is good because when we change this to actually communicate with the db we won't need to change any other files other than those in the datastore folder
============================================================*/


//mongoose is a persistant database
//in memory data is temporary

var expenses = require('../dataFiles/expenses.json');

// will need to change these functions to search for a unique user's 
// expenses in their users.json 'expenses' array
const GetAllExpenses = function() {
    return expenses;
}

const GetExpenseById = function(id) {
    //do some filtering by id....
    return expenses.filter(expense => expense._id == id);
}

const SaveExpense = function(expenseModel) {
  
  expenses.push(expenseModel);
}

module.exports = {
    GetAllExpenses,
    GetExpenseById,
    SaveExpense
}