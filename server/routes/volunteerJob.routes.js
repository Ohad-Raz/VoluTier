const express = require('express');
const router = express.Router();
const volunteerJobController = require('../controllers/volunteerJob.controller');

// Create a new volunteer job
router.post('/', volunteerJobController.create);

// Get all volunteer jobs
router.get('/', volunteerJobController.getAll);

// Get a single volunteer job by ID
router.get('/:id', volunteerJobController.getById);

// Update a volunteer job by ID
router.put('/:id', volunteerJobController.updateById);

// Delete a volunteer job by ID
router.delete('/:id', volunteerJobController.deleteById);

module.exports = router;
