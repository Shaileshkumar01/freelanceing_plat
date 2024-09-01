const express = require('express');
const Application = require('../models/Application');
const router = express.Router();

// Submit a job application
router.post('/applications', async (req, res) => {
    const application = new Application(req.body);
    try {
        await application.save();
        res.status(201).send(application);
    } catch (e) {
        res.status(400).send(e);
    }
});

// Get applications for a job
router.get('/applications/:jobId', async (req, res) => {
    try {
        const applications = await Application.find({ jobId: req.params.jobId });
        res.send(applications);
    } catch (e) {
        res.status(500).send();
    }
});

module.exports = router;
