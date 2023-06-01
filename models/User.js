const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const User = new Schema({
    // id:{
    //     type: Number,
    //     unique: true
    //   },
    username: {
        type: String
    },
    displayName: {
        type: String
    },
    profilePic: {
         type: String
    }
});

module.exports = mongoose.model('User', User);