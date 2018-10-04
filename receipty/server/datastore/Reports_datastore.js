// datastore/Reports_datastore.js handles all of the database search/filter/sort/save for Reports. 
const mongoose = require('mongoose');
var reports = require('../dataFiles/reports.json');
//require in Report model (DB data)
var Report = require('../models/Report.js')

// const GetAllReports = function() {
//   return reports;
// }

//gets a report by the report's id
const GetReportById = function(_id) {
  let query = Report
    .find({
      _id: _id,
    });

  return query.exec();
}


const SaveReport = function(reportModel) {

    const report = new Report({
      name: reportModel.name,
      totalAmount: reportModel.totalAmount,
      fromUser: reportModel.fromUser,
      toAdmin: reportModel.toAdmin,
      requestedDate:reportModel.requestedDate,
      reimbursementDate: reportModel.reimbursementDate,
      userId: reportModel.userId
    });

    return report.save();
}

//a function that will find an expense by its id
const GetReportsByUserId = function (userId) {
  
  let query = Report.find({ userId: userId });
  return query.exec();
}

const AddExpenseToReportExpenseArray = function (reportId, expenseId){
  let query = Report
    .update({reportId: reportId} ,{expenses: expenses});
  return query.exec();

}

module.exports = {
  SaveReport,
  GetReportsByUserId,
  GetReportById,
  AddExpenseToReportExpenseArray
}