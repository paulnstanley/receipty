const mongoose = require('mongoose');
const { Schema } = mongoose;


const MessageSchema = new Schema({
  createdDate: { type: Date, default: Date.now },
  message: String,
  userId: Schema.ObjectId,
  reportId: Schema.ObjectId,
  type: String
});


module.exports = mongoose.model('Message', MessageSchema)