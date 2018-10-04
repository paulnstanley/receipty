const bodyParser = require('body-parser');
const authRouter = require('express').Router();
const passport = require('passport');



//dataSore is a file that will handle all of the mongodb sorting/filtering/saving...anything related to the DB.  This is why we don't need to require in mongoose in this file
//by requiring in the datastore/users_datastore, we are essentially bringing in all functions from that file and are using them in our 

authRouter.use(bodyParser.json());


authRouter.post('/api/login', passport.authenticate('login', {
    successRedirect: '/api/user/expenses',
    failureRedirect: '/failure',
  }));
  

// authRouter.get('/callback', (request, response) => {
//     response.redirect('/api/user/expenses');
// });

authRouter.get('/logout', (request, response) => {
    console.log("I am Logged out!")
    request.logOut()
    response.send("Woot Woot You're Logged Out")
})

authRouter.get('/failure', (request, response) =>{
    if(!request.isAuthenticated()) {
        response.status(401).send("Please Log In")
    }
})

module.exports = authRouter;
