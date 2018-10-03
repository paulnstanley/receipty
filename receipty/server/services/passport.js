// config/passport.js

// load all the things we need
var LocalStrategy = require('passport-local').Strategy;

// load up the user model
var User = require('../datastore/Users_datastore');

// expose this function to our app using module.exports
module.exports = function(passport) {

	// =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session (if user is logged in , save the _id to the session as req.session.passport.user)
    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    // used to deserialize the user (find user's object in the db and return it)
    passport.deserializeUser((_id, done) => {
        // let foundUser = User.find(user => user._id == _id);
        // done(null, foundUser);

        User.GetAllUsers().then(users => {
            user = users.find(user => user._id == _id);
            done(null, user);
        });
    });

    passport.use('login', new LocalStrategy((username, password, done) => {
         User.GetAllUsers().then(users => {

        let user = users.find(user => user.username == username && user.password == password);
        if (!user) {
            return done(null, false, { message: 'Incorrect username or password' });
        }
        return done(null, user);
    });
    }));
};