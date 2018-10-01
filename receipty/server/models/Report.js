const mongoose = require('mongoose');
const { Schema } = mongoose;


const ReportSchema = new Schema({
  name: String,
  totalAmount: Number,
  fromUser: String,
  toAdmin: String,
  requestedDate: String,
  reportCreatedDate: { type: Date, default: Date.now },
  reimbursementDate: String,
  userId: String
})

// const Report = mongoose.model('Report', ReportSchema);

module.exports = mongoose.model('Report', ReportSchema)