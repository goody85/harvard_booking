// src/pages/Facilities.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Facilities() {
    const [facilities, setFacilities] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Fetch facilities from the backend
        const fetchFacilities = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/facilities');
                setFacilities(response.data);
            } catch (error) {
                setMessage('Failed to fetch facilities');
            }
        };

        fetchFacilities();
    }, []);

    return (
        <div>
            <h2>Available Facilities</h2>
            {message && <p>{message}</p>}
            <ul>
                {facilities.length > 0 ? (
                    facilities.map((facility) => (
                        <li key={facility.facility_id}>
                            {facility.name} - {facility.description}
                        </li>
                    ))
                ) : (
                    <p>No facilities available.</p>
                )}
            </ul>
        </div>
    );
}

export default Facilities;
