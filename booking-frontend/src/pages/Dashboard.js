// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const [bookings, setBookings] = useState([]);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch bookings from the backend after login
        const fetchBookings = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/bookings', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setBookings(response.data);
            } catch (error) {
                setMessage('Failed to fetch bookings');
            }
        };

        fetchBookings();
    }, []);

    return (
        <div>
            <h2>Welcome to Your Dashboard</h2>
            {message && <p>{message}</p>}
            <h3>Your Recent Bookings</h3>
            <ul>
                {bookings.length > 0 ? (
                    bookings.map((booking) => (
                        <li key={booking.booking_id}>
                            Facility: {booking.facility_id}, Date: {booking.date}, Time: {booking.start_time} - {booking.end_time}
                        </li>
                    ))
                ) : (
                    <p>No bookings found.</p>
                )}
            </ul>
            <button onClick={() => navigate('/facilities')}>View Available Facilities</button>
        </div>
    );
}

export default Dashboard;
