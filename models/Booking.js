// models/Booking.js
const db = require('../config/db');

const Booking = {
    async create(userId, facilityId, date, startTime, endTime) {
        const [result] = await db.query(
            'INSERT INTO bookings (user_id, facility_id, date, start_time, end_time) VALUES (?, ?, ?, ?, ?)',
            [userId, facilityId, date, startTime, endTime]
        );
        return result.insertId;
    },
    async getByFacility(facilityId) {
        const [rows] = await db.query(
            'SELECT * FROM bookings WHERE facility_id = ? ORDER BY date, start_time',
            [facilityId]
        );
        return rows;
    },
    async getByUser(userId) {
        const [rows] = await db.query(
            'SELECT * FROM bookings WHERE user_id = ? ORDER BY date, start_time',
            [userId]
        );
        return rows;
    }
};

module.exports = Booking;
