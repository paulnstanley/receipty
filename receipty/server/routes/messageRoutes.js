const _ = require('lodash');
const { URL } = require('url');
const requireLogin = require('../middleware/requireLogin');

// const mongoose = require('mongoose');

// const requireLogin = require('../middlewares/requireLogin');

//dataSore is a file that will handle all of the mongodb sorting/filtering/saving
const messagesDatastore = require('../datastore/Messages_datastore');
const expensesDatastore = require('../datastore/Expenses_datastore');
const usersDatastore = require('../datastore/Users_datastore');

const messagesRouter = require('express').Router();


messagesRouter.get('/api/user/messages', function (request, response) {
  let UID = request.user._id
  //because using express you can shorten the reponse.writehead and response.end to this:
  messagesDatastore.GetMessagesByUserId(UID)
    .then(messagesByUserId => response.json(messagesByUserId));
})


module.exports = messagesRouter;