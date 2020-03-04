const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemScehma = new Schema({
    vin: {
        type: String,
        required: false
    },
    brand: {
        type: String,
        required: false
    },
    typetrailer: {
        type: String,
        required: false
    },
    dimensions: {
        type: String,
        required: false
    },
    weight: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item', ItemScehma);