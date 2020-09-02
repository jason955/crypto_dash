const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Account = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    total: {
        type: Number
    },
    previous_totals: {
        type: [Number]
    }
});

module.exports = mongoose.model('Account', Account);
