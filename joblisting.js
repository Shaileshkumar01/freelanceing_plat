import React, { useState, useEffect } from 'react';

const JobListing = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('/api/jobs')
            .then(response => response.json())
            .then(data => setJobs(data));
    }, []);

    return (
        <div>
            <h2>Available Jobs</h2>
            <ul>
                {jobs.map(job => (
                    <li key={job._id}>{job.title} - {job.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default JobListing;
