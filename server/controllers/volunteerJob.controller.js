const VolunteerJob = require('../models/volunteerJob.model');

const volunteerJobController = {
    // Create a new volunteer job
    create: async (req, res) => {
        try {
            const newVolunteerJob = await VolunteerJob.create(req.body);
            res.status(201).json(newVolunteerJob);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Get all volunteer jobs
    getAll: async (req, res) => {
        try {
            const volunteerJobs = await VolunteerJob.find();
            res.status(200).json(volunteerJobs);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Get a single volunteer job by ID
    getById: async (req, res) => {
        try {
            const volunteerJob = await VolunteerJob.findById(req.params.id);
            if (!volunteerJob) {
                res.status(404).json({ message: 'Volunteer job not found' });
            } else {
                res.status(200).json(volunteerJob);
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Update a volunteer job by ID
    updateById: async (req, res) => {
        try {
            const updatedVolunteerJob = await VolunteerJob.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedVolunteerJob) {
                res.status(404).json({ message: 'Volunteer job not found' });
            } else {
                res.status(200).json(updatedVolunteerJob);
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Delete a volunteer job by ID
    deleteById: async (req, res) => {
        try {
            const deletedVolunteerJob = await VolunteerJob.findByIdAndDelete(req.params.id);
            if (!deletedVolunteerJob) {
                res.status(404).json({ message: 'Volunteer job not found' });
            } else {
                res.status(200).json({ message: 'Volunteer job deleted successfully' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = volunteerJobController;
