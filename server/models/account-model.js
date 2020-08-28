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
        type: String
    },
    previous_totals: {
        type: String
    }
});

module.exports = mongoose.model('Account', Account);
