//datastore/Expenses.js handles all of the database search/filter/sort/save for Expenses. 

const mongoose = require('mongoose'); 
//require in Message model (DB data)
var Message = require('../models/Message')
//Finds all of user's messages in db
const GetAllMessagesForUser = function(id) {
    let query = Message.find({userId : id});
    return query.exec();
}

module.exports = {
    GetAllMessagesForUser
}