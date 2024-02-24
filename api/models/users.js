const mongoose = require('mongoose');

// Define User schema
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    lastLoggedIn: { type: Date, default: Date.now },
    status: { type: String, enum: ['Online', 'Offline'], default: 'Offline' }
});

module.exports = mongoose.model('User', UserSchema);