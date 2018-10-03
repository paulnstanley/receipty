const mongoose = require('mongoose');
const { Schema } = mongoose;


const UserSchema = new Schema({
    name: String,
    userName: String,
    email: String,
    role: String,
});


module.exports = mongoose.model('User', UserSchema)