const mongoose = require('mongoose');
const { Schema } = mongoose;
const ExpenseSchema = require('./Expense');
const ReportSchema = require('./Report');


const userSchema = new Schema({
    username: String,
    password: String,
    role: String,
    generatedToken: String,
    expenses: [ExpenseSchema], // an array of a user's expenses
    reports: [ReportSchema] // an array of a user's reports
});

mongoose.model('users', userSchema);




