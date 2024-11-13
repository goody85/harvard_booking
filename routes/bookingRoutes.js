// routes/bookingRoutes.js
const express = require('express');
const { createBooking, getBookingsByFacility, getBookingsByUser } = require('../controllers/bookingController');
const router = express.Router();

router.post('/', createBooking);                        // Route to create a booking
router.get('/facility/:facilityId', getBookingsByFacility); // Route to get bookings for a specific facility
router.get('/user/:userId', getBookingsByUser);         // Route to get bookings for a specific user

module.exports = router;
