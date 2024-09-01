import React, { useState, useEffect } from 'react';

const UserProfile = ({ match }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`/api/users/${match.params.id}`)
            .then(response => response.json())
            .then(data => setUser(data));
    }, [match.params.id]);

    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.skills?.join(', ')}</p>
            <p>Portfolio: {user.portfolio}</p>
        </div>
    );
};

export default UserProfile;
