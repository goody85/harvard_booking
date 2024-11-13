const db = require('../config/db');
const bcrypt = require('bcryptjs');

const User = {
    async create(username, password, role) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const [result] = await db.query(
            'INSERT INTO users (username, password_hash, role) VALUES (?, ?, ?)',
            [username, hashedPassword, role]
        );
        return result.insertId;
    },
    async findByUsername(username) {
        const [rows] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
        return rows[0];
    }
};

module.exports = User;
