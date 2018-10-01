const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
// const mongoose = require('mongoose');
// const requireLogin = require('../middlewares/requireLogin');

// changing 'datastore' to 'reportsDatastore' to not have a 'datastore' in each route file
const reportsDatastore = require('../datastore/Reports_datastore');
const usersDatastore = require('../datastore/Users_datastore');

const reportsRouter = require('express').Router();

//TODO: DELETE THIS BECAUSE IT IS FOR TESTING ONLY
reportsRouter.get('/api/reports', function (request, response) {
  //because using express you can shorten the reponse.writehead and response.end to this:
  response.json(reportsDatastore.GetAllReports());
})


//post api/reports will save a particular user's report to the the DB
//the request will include the user's id and so in addition to saveing this we will also need to associated by the id sent in the request with a user
reportsRouter.post('/api/reports/:userId', function (request, response) {
  //define the user id sent in the request
  let id = request.params.userId;
  //expenseModel = request.body.amount;
  let reportModel = {
    name: request.body.name,
    total: request.body.total,
    from: request.body.from,
    to: request.body.to,
    submittedDate: request.body.submittedDate,
    expenses: [],
    userId: request.params.id
  };

  reportsDatastore.SaveReport(reportModel);

  usersDatastore.AddReportToUserArray(id, reportModel);

  //respond with a 200 message that the item was saved
  response.end(console.log('200: the report was saved!'));
})

module.exports = reportsRouter;