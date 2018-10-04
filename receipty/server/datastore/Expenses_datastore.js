//datastore/Expenses.js handles all of the database search/filter/sort/save for Expenses. 

const mongoose = require('mongoose'); 

var users = require('../dataFiles/users.json');
//require in Expense model (DB data)
var Expense = require('../models/Expense.js');
var expenses = require('../dataFiles/expenses.json');

//Finds all expenses in db
//TODO either delete because not testing or change --> not functional for mongoose query 
const GetAllExpenses = function() {
    return expenses;
}

//search the DB for expenses by user's id
const GetExpensesByUserId = function(UID) {
    let query = Expense.find({userId : UID});
    return query.exec();
}

//returns one expense for a user
const GetUniqueExpenseByUserId = function(userId, expenseId) {
    let query = Expense
    .find({
        userId : userId,
        _id: expenseId
    });
    
    return query.exec();
}

//returns one expense for a user
const GetAllExpensesByReportId= function (reportId) {
    let query = Expense
        .find({
            reportId: reportId
        });

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
}

const PostExpenseInReport = function(reportId){
    
}

module.exports = {
    GetAllExpenses,
    SaveExpense,
    GetExpensesByUserId,
    GetUniqueExpenseByUserId,
    GetAllExpensesByReportId
}