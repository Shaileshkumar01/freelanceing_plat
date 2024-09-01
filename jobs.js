const express = require('express');
const Job = require('../models/Job');
const router = express.Router();

// Create a new job post
router.post('/jobs', async (req, res) => {
    const job = new Job(req.body);
    try {
        await job.save();
        res.status(201).send(job);
    } catch (e) {
        res.status(400).send(e);
    }
});

// Get all job posts
router.get('/jobs', async (req, res) => {
    try {
        const jobs = await Job.find({});
        res.send(jobs);
    } catch (e) {
        res.status(500).send();
    }
});

module.exports = router;
