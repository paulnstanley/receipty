const mongoose = require('mongoose');
const { Schema } = mongoose;


const UserSchema = new Schema({
    username: String,
    password: String,
    role: String,
    generatedToken: String,
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