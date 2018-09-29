const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');


//GET/api/me/expenses returns expenses array for logged in users
myRouter.get('/api/me/expenses', function (request, response) {
  //use helper function to validate/process access token
  let currentAccessToken = getValidTokenFromRequest(request);
  if (!currentAccessToken) {
    // If there isn't an access token in the request, we know that the user isn't logged in, so don't continue
    response.writeHead(401, "Session expired, please try again");
    response.end();
  } else {
    // Verify that the user exists to know if we should continue processing
    let me = users.find((me) => {
      return me.id == request.params.id;
    });
    if (!me) {
      // If there isn't a user with that id, then return a 404
      response.writeHead(404, "That user cannot be found");
      response.end();
      return;
    } else {
      response.writeHead(200, Object.assign({ 'Content-Type': 'application/json' }));
      response.end(JSON.stringify(me.expenses));
    }
  }
});
