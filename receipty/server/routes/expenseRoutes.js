const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');


const Expense = mongoose.model('expenses');

module.exports = app => {
  app.get('/api/expenses', (req, res) => {
    const expenses = Expense.find({});

    res.send(expenses);
})
};