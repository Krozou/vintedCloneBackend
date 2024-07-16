const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema ({
    seller : {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    buyer : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true,
    },
    amount : {
        type : number,
        required : true,
    },
    item : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Item',
        required : true,
    },
    status : {
        type : String,
        enum : ['En attente', 'Complet', 'Annule'],
        default : 'En attente',
    },

},{timestamps});

const Transaction = mongoose.model ('Transaction', transactionSchema);

module.exports = Transaction;