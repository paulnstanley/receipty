const mongoose = require('mongoose');
const { Schema } = mongoose;


const UserSchema = new Schema({
    username: String,
    password: String,
    role: String,
    messages: String
});


module.exports = mongoose.model('User', UserSchema)