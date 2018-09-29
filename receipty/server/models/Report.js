const mongoose = require('mongoose');
const { Schema } = mongoose;


const ReportSchema = new Schema({
    name: String,
    total: Number,
    from: String,
    to: String,
    submittedDate: String
})

mongoose.model('reports', ReportSchema);



