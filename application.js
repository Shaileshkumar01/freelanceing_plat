const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    jobId: mongoose.Schema.Types.ObjectId,
    freelancerId: mongoose.Schema.Types.ObjectId,
    proposal: String,
    status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
    created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Application', applicationSchema);
