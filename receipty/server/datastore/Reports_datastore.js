const mongoose = require('mongoose');


/*==========================================================
the datastore/Reports_datastore.js file will handle all of the database search/filter/sort/save for Reports.  Export the functions as an object so as not to overwrite any of them.  

Right now, this is saving in memory so anything will be lost if the server restarts.  it's ok for testing and is good because when we change this to actually communicate with the db we won't need to change any other files other than those in the datastore folder
============================================================*/

//add functions here and don't forget to export

var reports = require('../dataFiles/reports.json');


const GetAllReports = function() {
  return reports;
}

const GetReportById = function(id) {
  //do some filtering by id....
  return reports.filter(report => report._id == id);
}

const SaveReport = function(reportModel) {

reports.push(reportModel);
}


module.exports = {
  GetAllReports,
  GetReportById,
  SaveReport
}