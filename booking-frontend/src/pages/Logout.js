// src/pages/Logout.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear token and role from localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('role');

        // Redirect to login page
        navigate('/login');
    }, [navigate]);

    return (
        <div>
            <h2>Logging Out...</h2>
            <p>You will be redirected to the login page.</p>
        </div>
    );
};

export default Logout;
