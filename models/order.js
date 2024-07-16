const mongose = require('mongose');

const orderchema = new mongoose.Schema({
    items : [{
        type : String,
        ref : 'Item',
    }],
    user: [{
        type : String,
        ref : 'User',
        required : true,
    }],
    total_amount: {
        type : String,
        required : true,
    },
    status : {
        type : String,
        enum : ['pending', 'completed', 'cancelled'],
        default : 'pending'
    },
   
},{timestamps});

const Order = mongose.model ('Order', orderSchema);

module.exports = Commande; 