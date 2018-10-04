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


messagesRouter.get('/api/messages', function (request, response) {
//   let UID = request.user._id
let UID = '5bb58fd877e62eed154a6d6e';
  //because using express you can shorten the reponse.writehead and response.end to this:
  messagesDatastore.GetMessagesForUser(UID)
    .then(messagesByUserId => response.json(messagesByUserId)); 
        ;
})

messagesRouter.post('/api/messages/save', function (request, response) {
  messagesDatastore.SaveMessagesForUser(  
    {
      message: 'anything',
      userId: '5bb58fd877e62eed154a6d6e',
      type: 'accepted'
    }).then(_message => response.json(_message));

})

module.exports = messagesRouter;