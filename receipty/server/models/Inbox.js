const mongoose = require('mongoose');
const { Schema } = mongoose;


const InboxSchema = new Schema({
  reportId: String,
  report: String,
  role: String,
});


module.exports = mongoose.model('User', UserSchema)