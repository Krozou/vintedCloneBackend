const mongose = require ('mongose');

const reviewSchema = new mongose.Schema ({
    item : {
        type : String,
        ref : 'Item',
        required : true,
    },
    user : {
        type : String,
        ref : 'User',
        required : true,
    },
    rating : {
        type : String,
        min: 1,
        max : 5,
    },
    comment : {
        type : string
    }
},{timestamps});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Avis;