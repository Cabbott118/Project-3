const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema 
const ItemSchema = new Schema({
    brand: {
        type: String,
        required: true
    },
    trailer_type: {
        type: String,
        required: true
    },
    deck_dimensions: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    added_by :{
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);