//datastore/Expenses.js handles all of the database search/filter/sort/save for Expenses. 

const mongoose = require('mongoose'); 

var users = require('../dataFiles/users.json');
//require in Expense model (DB data)
var Expense = require('../models/Expense.js');

var ObjectId = require('mongoose').Types.ObjectId; 

//Finds all expenses in db
//TODO either delete because not testing or change --> not functional for mongoose query 
const GetAllExpenses = () =>  {
    return Expense.find({}).exec();
}

//search the DB for expenses by user's id
const GetExpensesByUserId = (userId) => {
    let filter = {userId : userId}
    let query = Expense.find(filter);
    console.log(userId)
    console.log(userId.toString())
    console.log(filter)
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

module.exports = {
    GetAllExpenses,
    SaveExpense,
    GetExpensesByUserId,
    GetUniqueExpenseByUserId,
    GetAllExpensesByReportId
}