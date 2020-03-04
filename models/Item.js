const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemScehma = new Schema({
    vin: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    typetrailer: {
        type: String,
        required: true
    },
    dimensions: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item', ItemScehma);