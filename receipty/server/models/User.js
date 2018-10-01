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
// userSchema.methods.validPassword = function (password) {
//     if (password === this.password) {
//       return true; 
//     } else {
//       return false;
//     }
//   }
// const User = mongoose.model('User', UserSchema);

module.exports = mongoose.model('User', UserSchema)