const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Tracker = new Schema({
    name: {
        type: String
    },
    goal: {
        type: String
    }
});

module.exports = mongoose.model('Tracker', Tracker);
