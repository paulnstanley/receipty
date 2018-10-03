const mongoose = require('mongoose');
const { Schema } = mongoose;


const ExpenseSchema = new Schema({
  merchant: String,
  amount: Number,
  purchaseDate: String,
  expenseCreatedDate: { type: Date, default: Date.now },
  category: String,
  reciept_img: String,
  comments: String,
  userId: String,
  reportId: String
});

// const Expense = mongoose.model('Expense', ExpenseSchema);

module.exports = mongoose.model('Expense', ExpenseSchema)