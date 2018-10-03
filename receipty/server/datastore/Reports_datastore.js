// datastore/Reports_datastore.js handles all of the database search/filter/sort/save for Reports. 
const mongoose = require('mongoose');
var reports = require('../dataFiles/reports.json');
//require in Report model (DB data)
var Report = require('../models/Report.js')

// const GetAllReports = function() {
//   return reports;
// }

// const GetReportById = function(id) {
//   //do some filtering by id....
//   return reports.filter(report => report._id == id);
// }

const SaveReport = function(reportModel) {

    const report = new Report({
      name: reportModel.name,
      totalAmount: reportModel.totalAmount,
      fromUser: reportModel.fromUser,
      toAdmin: reportModel.toAdmin,
      requestedDate:reportModel.requestedDate,
      reimbursementDate: reportModel.reimbursementDate,
      userId: reportModel.userIsd
    });

    return report.save();
}

//a function that will find an expense by its id
const GetReportsByUserId = function (userId) {
  
  let query = Report.find({ userId: userId });
  return query.exec();
}

module.exports = {
  SaveReport,
  GetReportsByUserId
}