'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ChickenSchema = new Schema({
    name: {
        type: String,
        required: 'A chicken need a name'
    },
    birthdate: {
        type: Date,
        default: Date.now
    },
    weight: {
        type: String,
        required: 'A chicken need a weigth'
    },
    steps: {
      type: Number,
      default: 0
    },
    isRunning: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Chicken', ChickenSchema);