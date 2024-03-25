const VolunteerJob = require('../models/volunteerJob.model');
const {Employee} = require('../models/employee.model');

const volunteerJobController = {
    create: async (req, res) => {
        try {
            const newVolunteerJob = await VolunteerJob.create(req.body);
            res.status(201).json(newVolunteerJob);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getAll: async (req, res) => {
        try {
            const volunteerJobs = await VolunteerJob.find();
            res.status(200).json(volunteerJobs);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

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
    },

    apply: async (req, res) => {
        try {
            const { jobId } = req.params;
            const { employeeId } = req.body;

            const employeeExists = await Employee.exists({ _id: employeeId });
            if (!employeeExists) {
                return res.status(404).json({ message: 'Employee not found' });
            }
            const volunteerJob = await VolunteerJob.findById(jobId);
            if (volunteerJob.applications.includes(employeeId)) {
                return res.status(400).json({ message: 'Employee has already applied for this job' });
            }
            volunteerJob.applications.push(employeeId);
            await volunteerJob.save();

            res.status(200).json({ message: 'Employee applied successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updateJobStatusAndAwardXP: async (req, res) => {
        try {
            const { jobId } = req.params;
    
            const job = await VolunteerJob.findById(jobId);
            if (!job) {
                return res.status(404).json({ message: 'Job not found' });
            }
    
            if (job.status !== 'active') {
                return res.status(400).json({ message: 'Job is not in active' });
            }
    
            job.status = 'completed';
            await job.save();
    
            const employees = await Employee.find({ _id: { $in: job.applications } });
            employees.forEach(async (employee) => {
                employee.currentXP += 15;
                await employee.save();
            });
    
            res.status(200).json({ message: 'Job status updated to completed and XP awarded to employees' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    updateJobStatusToActive : async () => {
        try {
            const upcomingJobs = await VolunteerJob.find({ status: 'upcoming' });
    
            const today = new Date();
    
            const sixAM = new Date(today);
            sixAM.setHours(6, 0, 0, 0);
    
            for (const job of upcomingJobs) {
                const jobStartDate = new Date(job.startDate);
    
                if (jobStartDate.getTime() === sixAM.getTime() || jobStartDate.getTime() >= sixAM.getTime()) {
                    job.status = 'active';
                    await job.save();
                }
            }
        } catch (error) {
            console.error("Error updating job status to active:", error);
        }
    }
    
    
};

module.exports = volunteerJobController;
