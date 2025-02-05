const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Message = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    sender: {
        username: {
            type: String,
            required: true
        }
    },
    content: {
         type: String
    }
});

module.exports = mongoose.model('Message', Message);