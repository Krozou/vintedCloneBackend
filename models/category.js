const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    }
},{timestamps});

const Category = mongoose.model('Category', categorySchema);

modeule.exports = Category;