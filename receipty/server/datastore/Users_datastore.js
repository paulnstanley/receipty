const mongoose = require('mongoose');

/*==========================================================
the datastore/Users_datastore.js file will handle all of the database search/filter/sort/save for Users.  Export the functions as an object so as not to overwrite any of them.  
============================================================*/

//require in dummy data in users.json
var users = require('../dataFiles/users.json');

//require in User model (DB data)
var User = require ('../models/User.js')

//add functions here and don't forget to export

//**** LOCAL MONGODB -NOT IN MEMORY  ****/
const AddNewUser = function(userModel){
  const user = new User({
    username: userModel.username,
    password: userModel.password,
    role: userModel.role,
    generatedToken: userModel.generatedToken,
  });

  return user.save();
}

const GetAllUsers = function() {
  return User.find();
}

//find a user by id
const GetUserById = function (_id) {
  /**** LOCAL MONGODB -NOT IN MEMORY  ****/
 //return(
    User
    .findById(_id)
    .populate('expenses')
    .populate('reports')
    .exec((err, user) => {
      if(err) {
        console.log("error");
      }
    })
}

const GetUserIdByName = function (userName) {
  let myUser = users.filter(userName => user.username == username);

  return myUser.id;
}

const GetExpensesForUser = function(id){
  let myUser = users.filter(user => user.id == id);

  return myUser.expenses;

}

module.exports = {
  GetUserById,
  GetAllUsers,
  GetUserIdByName,
  GetExpensesForUser,
  AddNewUser
}