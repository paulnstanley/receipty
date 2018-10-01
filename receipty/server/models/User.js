const mongoose = require('mongoose');
const { Schema } = mongoose;


const UserSchema = new Schema({
    username: String,
    password: String,
    role: String,
    generatedToken: String,
    expenses: [{type: Schema.Types.ObjectId, ref: 'Expense'}], // an array of a user's expenses
    reports: [{type: Schema.Types.ObjectId, ref: 'Report'}] // an array of a user's reports
});

// const User = mongoose.model('User', UserSchema);

module.exports = mongoose.model('User', UserSchema)