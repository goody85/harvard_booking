// app.js
const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/db');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(express.json());

// Test database connection
db.getConnection()
    .then(conn => {
        console.log('Connected to MySQL database');
        conn.release();
    })
    .catch(err => console.error('MySQL connection failed:', err));

// Enable CORS for all routes
app.use(cors({
    origin: 'http://localhost:3000',  // Allow requests from React frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allowed HTTP methods
    credentials: true  // Allow cookies or other credentials if needed
}));

// Placeholder for routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/facilities', require('./routes/facilityRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
