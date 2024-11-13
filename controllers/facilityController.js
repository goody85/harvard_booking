// controllers/facilityController.js
const Facility = require('../models/Facility');

exports.createFacility = async (req, res) => {
    const { name, location, description } = req.body;
    try {
        const facilityId = await Facility.create(name, location, description);
        res.status(201).json({ facilityId, message: 'Facility created successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Facility creation failed' });
    }
};

exports.getAllFacilities = async (req, res) => {
    try {
        const facilities = await Facility.getAll();
        res.json(facilities);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve facilities' });
    }
};

exports.updateFacility = async (req, res) => {
    const { id } = req.params;
    const { name, location, description } = req.body;
    try {
        await Facility.update(id, name, location, description);
        res.json({ message: 'Facility updated successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Facility update failed' });
    }
};
