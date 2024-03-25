const express = require('express');
const router = express.Router();
const volunteerJobController = require('../controllers/volunteerJob.controller');

router.post('/', volunteerJobController.create);
router.get('/', volunteerJobController.getAll);
router.get('/:id', volunteerJobController.getById);
router.put('/:id', volunteerJobController.updateById);
router.delete('/:id', volunteerJobController.deleteById);
router.post('/:jobId/apply', volunteerJobController.apply);

module.exports = router;
