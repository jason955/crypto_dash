const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Tracker = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model('Tracker', Tracker);
