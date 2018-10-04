const mongoose = require('mongoose');
const { Schema } = mongoose;


const MessageSchema = new Schema({
  requestedDate: { type: Date, default: Date.now },
  status: String,
  userId: String,
  adminId: String
});


module.exports = mongoose.model('Message', MessageSchema)