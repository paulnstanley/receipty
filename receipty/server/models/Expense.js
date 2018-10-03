const mongoose = require('mongoose');
const { Schema } = mongoose;


const ExpenseSchema = new Schema({
  Merchant: String,
  Amount: Number,
  PurchaseDate: String,
  ExpenseCreatedDate: { type: Date, default: Date.now },
  Category: String,
  Reciept_img: String,
  Comments: String,
  UserId: String,
  ReportId: String
});

// const Expense = mongoose.model('Expense', ExpenseSchema);

module.exports = mongoose.model('Expense', ExpenseSchema)