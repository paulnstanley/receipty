const mongoose = require('mongoose');
const { Schema } = mongoose;


const ReportSchema = new Schema({
  ReportName: String,
  ReportAmountTotal: Number,
  UserName: String,
  UserId: String,
  ReportCreatedDate: { type: Date, default: Date.now },
  DateSentToOrganization: Date,
  ReimbursementDate: Date,
  Organization: String
})

// const Report = mongoose.model('Report', ReportSchema);

module.exports = mongoose.model('Report', ReportSchema)

