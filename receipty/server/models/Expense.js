const mongoose = require('mongoose');
const { Schema } = mongoose;


const expenseSchema = new Schema({
    merchant: String,
    amount: Number,
    createdDate: String,
    category: String,
    reciept_img: String,
    comments: String,
    reimbursedDate: String
});

mongoose.model('expenses', expenseSchema);




