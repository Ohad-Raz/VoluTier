const express = require('express');
const router = express.Router();
const volunteerJobController = require('../controllers/volunteerJob.controller');
const { updateJobStatusToActive } = require('../controllers/volunteerJob.controller');
const {businessAuth} = require('../middleware/business.middleware')

router.post('/', businessAuth, volunteerJobController.create);

router.get('/', volunteerJobController.getAll);
router.get('/:id', volunteerJobController.getById);

router.patch('/:id', volunteerJobController.updateById);
router.patch('/:jobId/complete', volunteerJobController.updateJobStatusAndAwardXP);

router.delete('/:id', volunteerJobController.deleteById);

router.post('/:jobId/apply', volunteerJobController.apply);
router.post('/getVolunteerByFilter', volunteerJobController.getVolunteerByFilter);



router.post('/updateStatusToActive', (req, res) => {
    try {
        updateJobStatusToActive();
        res.status(200).json({ message: 'Updated job status to active!' });
    } catch (error) {
        res.status(500).json({ message: "Cannot find any Job to change it status" });
    }
});

module.exports = router;
