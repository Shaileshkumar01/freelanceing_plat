const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: String,
    description: String,
    requirements: String,
    budget: Number,
    employerId: mongoose.Schema.Types.ObjectId,
    created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Job', jobSchema);
