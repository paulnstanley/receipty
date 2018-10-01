const mongoose = require('mongoose');
const { Schema } = mongoose;


const UserSchema = new Schema({
    username: String,
    password: String,
    role: String,
    generatedToken: String,
});

// const User = mongoose.model('User', UserSchema);

module.exports = mongoose.model('User', UserSchema)