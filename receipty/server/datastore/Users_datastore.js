const mongoose = require('mongoose');

/*==========================================================
the datastore/Users_datastore.js file will handle all of the database search/filter/sort/save for Users.  Export the functions as an object so as not to overwrite any of them.  

Right now, this is saving in memory so anything will be lost if the server restarts.  it's ok for testing and is good because when we change this to actually communicate with the db we won't need to change any other files other than those in the datastore folder
============================================================*/

//require in dummy data in users.json
var users = require('../dataFiles/users.json');


//add functions here and don't forget to export

const GetAllUsers = function() {
  return users;
}

//find a user by id
const GetUserById = function (id) {
  //do some filtering by id....
  return users.filter(user => user._id == id);
}

const GetUserIdByName = function (userName) {
  let myUser = users.filter(userName => user.username == username);

  return myUser.id;
}

const GetExpensesForUser = function(id){
  let myUser = users.filter(user => user.id == id);

  return myUser.expenses;

}

const AddExpenseToUserArray = function (id, expenseModel){
  let userToPushTo = GetUserById(id);
  // console.log(userToPushTo[0])
  userToPushTo[0].expenses.push(expenseModel);
};

const AddReportToUserArray = function (id, reportModel) {
  let userToPushTo = GetUserById(id);
  // console.log(userToPushTo[0])
  userToPushTo[0].reports.push(reportModel);
};

module.exports = {
  GetUserById,
  GetAllUsers,
  GetUserIdByName,
  GetExpensesForUser,
  AddExpenseToUserArray,
  AddReportToUserArray
}