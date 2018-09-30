const mongoose = require('mongoose');
const { Schema } = mongoose;


const UserSchema = new Schema({
    username: String,
    password: String,
    role: String,
    generatedToken: String,
    expenses: [{type: Schema.Types.ObjectId, ref: 'expense'}], // an array of a user's expenses
    reports: {type: Schema.Types.ObjectId, ref: 'report'} // an array of a user's reports
});

const User = mongoose.model('user', UserSchema);

const ExpenseSchema = new Schema({
    merchant: String,
    amount: Number,
    createdDate: String,
    category: String,
    reciept_img: String,
    comments: String,
    reimbursedDate: String,
    userId: {type: Schema.Types.ObjectId, ref: 'user'},
    report: {type: Schema.Types.ObjectId, ref: 'report'}
});

const Expense = mongoose.model('expense', ExpenseSchema);

const ReportSchema = new Schema({
    name: String,
    total: Number,
    from: String,
    to: String,
    submittedDate: String,
    expenses: [{type: Schema.Types.ObjectId, ref: 'expense'}],
    userId: {type: Schema.Types.ObjectId, ref: 'user'}
})

const Report = mongoose.model('report', ReportSchema);




