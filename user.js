const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ['freelancer', 'employer'], default: 'freelancer' },
    skills: [String],
    portfolio: String,
    rating: Number,
    created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
