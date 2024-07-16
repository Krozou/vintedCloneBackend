const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema ({
    adress : {
        type : String,
        required : true,
    },
    details : {
        type : String,
        required : true,
    },
    mode_paiement : {
        type : String,
        required : true,
    }
},{timestamps});

const Payment = mongose.model('Payment', paymentSchema);

module.exports = Payment; 