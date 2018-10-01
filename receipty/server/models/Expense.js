const mongoose = require('mongoose');
const { Schema } = mongoose;


const ExpenseSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  merchant: String,
  amount: Number,
  createdDate: String,
  category: String,
  reciept_img: String,
  comments: String,
  reimbursedDate: String,
  userId: { type: Schema.Types.ObjectId, ref: 'user' },
  reportId: { type: Schema.Types.ObjectId, ref: 'report' }
});

// const Expense = mongoose.model('Expense', ExpenseSchema);

module.exports = mongoose.model('Expense', ExpenseSchema)