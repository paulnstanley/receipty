const mongoose = require('mongoose');
const { Schema } = mongoose;

const ReportSchema = new Schema({
  name: String,
  totalAmount: Number,
  fromUser: Schema.ObjectId,
  toAdmin: Schema.ObjectId,
  requestedDate: String,
  reportCreatedDate: { type: Date, default: Date.now },
  reimbursementDate: String,
  userId: Schema.ObjectId,
  expenses: [Schema.ObjectId]
})

module.exports = mongoose.model('Report', ReportSchema)