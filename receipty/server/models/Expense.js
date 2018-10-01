const mongoose = require('mongoose');
const { Schema } = mongoose;


const ExpenseSchema = new Schema({
  merchant: String,
  amount: Number,
  createdDate: String,
  category: String,
  reciept_img: String,
  comments: String,
  reimbursedDate: String,
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  reportId: { type: Schema.Types.ObjectId, ref: 'Report' }
});

// const Expense = mongoose.model('Expense', ExpenseSchema);

module.exports = mongoose.model('Expense', ExpenseSchema)