// routes/facilityRoutes.js
const express = require('express');
const { createFacility, getAllFacilities, updateFacility } = require('../controllers/facilityController');
const router = express.Router();

router.post('/', createFacility);       // Route to create a new facility
router.get('/', getAllFacilities);      // Route to get all facilities
router.put('/:id', updateFacility);     // Route to update a specific facility

module.exports = router;
