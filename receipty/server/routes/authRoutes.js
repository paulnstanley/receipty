const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
// const mongoose = require('mongoose');
// const requireLogin = require('../middlewares/requireLogin');

//dataSore is a file that will handle all of the mongodb sorting/filtering/saving...anything related to the DB.  This is why we don't need to require in mongoose in this file
//by requiring in the datastore/users_datastore, we are essentially bringing in all functions from that file and are using them in our 
const datastore = require('../datastore/Users_datastore');

const authRouter = require('express').Router();


/*

put routes here and reference functions from datastore/Users_datasore

*/

module.exports = authRouter;
