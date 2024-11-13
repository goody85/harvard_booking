// models/Facility.js
const db = require('../config/db');

const Facility = {
    async create(name, location, description) {
        const [result] = await db.query(
            'INSERT INTO facilities (name, location, description) VALUES (?, ?, ?)',
            [name, location, description]
        );
        return result.insertId;
    },
    async getAll() {
        const [rows] = await db.query('SELECT * FROM facilities');
        return rows;
    },
    async update(facilityId, name, location, description) {
        await db.query(
            'UPDATE facilities SET name = ?, location = ?, description = ? WHERE facility_id = ?',
            [name, location, description, facilityId]
        );
        return true;
    }
};

module.exports = Facility;
