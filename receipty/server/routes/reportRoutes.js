const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
// const mongoose = require('mongoose');
// const requireLogin = require('../middlewares/requireLogin');

// changing 'datastore' to 'reportsDatastore' to not have a 'datastore' in each route file
const reportsDatastore = require('../datastore/Reports_datastore');

const reportsRouter = require('express').Router();


reportsRouter.get('/api/reports', function (request, response) {
  //because using express you can shorten the reponse.writehead and response.end to this:
  response.json(reportsDatastore.GetAllReports());
})

reportsRouter.post('/api/reports', function (request, response) {
    //expenseModel = request.body.amount;
    let reportModel = {
      name: request.body.name,
      total: request.body.total,
      from: request.body.from,
      to: request.body.to,
      submittedDate: request.body.submittedDate
    };

    reportsDatastore.SaveReport(reportModel);
  
  
    //respond with a 200 message that the item was saved
    response.end(console.log('200: the report was saved!'));
  })

module.exports = reportsRouter;