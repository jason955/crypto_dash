const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Event = new Schema({
    title: {
        type: String
    },
    date: {
        type: Date
    },
    amount:{
        type: Number
    }
});

module.exports = mongoose.model('Event', Event);
