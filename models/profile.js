const mongoose = require('mongoose');

const profilSchema = new mongoose.Schema({
    user : {
        type : string,
        required : true,
        ref : 'User',
    },
    nom : {
        type : string,
        required : true, 
    },
    prenom : {
        type : string,
        required : true,
    },
    adresse : {
        type : string,
    },
    phone : {
        type : string,
    },
},{timestamps});

const Profile = mongoose.model ('Profile', profilSchema);

module.exports = Profile;