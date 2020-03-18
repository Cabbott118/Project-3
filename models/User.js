const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema 
const UserSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    is_host: {
        type: Boolean,
        default: false,
        required: true
    },
    is_admin: {
        type: Boolean,
        default: false,
        required: true
    },
    register_date: {
        type: Date,
         default: Date.now
    }
});

module.exports = User = mongoose.model('user', UserSchema);