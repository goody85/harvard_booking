// controllers/bookingController.js
const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
    const { userId, facilityId, date, startTime, endTime } = req.body;
    try {
        const bookingId = await Booking.create(userId, facilityId, date, startTime, endTime);
        res.status(201).json({ bookingId, message: 'Booking created successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Booking creation failed' });
    }
};

exports.getBookingsByFacility = async (req, res) => {
    const { facilityId } = req.params;
    try {
        const bookings = await Booking.getByFacility(facilityId);
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve bookings' });
    }
};

exports.getBookingsByUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const bookings = await Booking.getByUser(userId);
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve bookings' });
    }
};
