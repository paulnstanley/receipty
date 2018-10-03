const _ = require('lodash');
const { URL } = require('url');
// const mongoose = require('mongoose');
// const requireLogin = require('../middlewares/requireLogin');

//dataSore is a file that will handle all of the mongodb sorting/filtering/saving...anything related to the DB.  This is why we don't need to require in mongoose in this file
const usersDatastore = require('../datastore/Users_datastore');

const userRouter = require('express').Router();

//put routes here and reference functions from datastore/Users_datasore

//TODO: remove, this was for testing (later we will need /api/me/get and more error handling)
userRouter.get('/api/users', function (request, response) {
  //because using express you can shorten the reponse.writehead and response.end to this:
  usersDatastore.GetAllUsers().then(getAllUsers => response.json(getAllUsers));
})

//TODO: this will need to be updated to account for a logged in user.  For now it will get a user based on a userid as a parameter
userRouter.get('/api/user/:_id', function (request, response) {
  let _id = request.params._id;
  usersDatastore.GetUserById(_id).then(userById => response.json(userById));
})


//TODO: update this to reflect proper user login
userRouter.post('/api/user/new', function(request, response){
  let userModel = {
    username: request.body.username,
    password: request.body.password,
    role: request.body.role,
    generatedToken: 00000000,
  }
  usersDatastore.AddNewUser(userModel);
  //respond with a 200 message that the item was saved
  response.end(console.log('200: the user was saved!'));

})

module.exports = userRouter;
