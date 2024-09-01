import React, { useState } from 'react';

const JobApplication = ({ jobId }) => {
    const [proposal, setProposal] = useState('');

    const submitApplication = () => {
        fetch('/api/applications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ jobId, proposal }),
        })
        .then(response => response.json())
        .then(data => console.log(data));
    };

    return (
        <div>
            <h2>Submit your proposal</h2>
            <textarea
                value={proposal}
                onChange={(e) => setProposal(e.target.value)}
            />
            <button onClick={submitApplication}>Submit</button>
        </div>
    );
};

export default JobApplication;
