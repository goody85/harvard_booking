const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const { username, password, role } = req.body;
    try {
        const userId = await User.create(username, password, role);
        res.status(201).json({ userId, message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Registration failed' });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findByUsername(username);
        if (user && await bcrypt.compare(password, user.password_hash)) {
            const token = jwt.sign({ userId: user.user_id, role: user.role }, process.env.JWT_SECRET);
            res.json({ token });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Login failed' });
    }
};
