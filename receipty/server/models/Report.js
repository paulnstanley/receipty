const mongoose = require('mongoose');
const { Schema } = mongoose;


const ReportSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  totalAmount: Number,
  fromUser: String,
  toAdmin: String,
  requestedDate: String,
  expenses: [{ type: Schema.Types.ObjectId, ref: 'Expense' }],
  userId: { type: Schema.Types.ObjectId, ref: 'User' }
})

// const Report = mongoose.model('Report', ReportSchema);

module.exports = mongoose.model('Report', ReportSchema)