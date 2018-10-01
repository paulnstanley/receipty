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

    // used to serialize the user for the session
    passport.serializeUser((user, done) => {
        console.log('serializing');
        done(null, user._id);
    });

    // used to deserialize the user
    passport.deserializeUser((_id, done) => {
        // let foundUser = User.find(user => user._id == _id);
        // done(null, foundUser);

        let users = User.GetAllUsers();
        let user = users.find(user => user._id == _id);
        console.log('the user is ', user)
        done(null, user);

    });

    passport.use('login', new LocalStrategy((username, password, done) => {
        let users = User.GetAllUsers();
        let user = users.find( user => user.username == username && user.password == password);
        console.log('the user is logining in as ', user)

            if (!user) {
              return done(null, false, { message: 'Incorrect username or password' });
            }
            return done(null, user);
        }
    ));
};