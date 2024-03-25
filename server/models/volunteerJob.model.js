const mongoose = require('mongoose');

const volunteerJobSchema = new mongoose.Schema({
    business: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Business', // Assuming you have a Business model
        required: false
    },
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    maxAmount: {
        type: Number,
        required: true
    },
    applications: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // Assuming you have a User model
    }],
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    estimatedHours: {
        type: Number,
        required: true
    },
    imgURL: {
        type: String,
        required: true
    },
    categories: {
        type: [String],
        required: true
    },
    XP: {
        type: Number,
        required: true
    },
    contactPhone: {
      type: String
  },
  status: {
    type: String,
    enum: ['upcoming', 'active', 'closed', 'cancelled', 'completed'],
    default: 'upcoming'
},
    createdAt: {
        type: Date,
        default: Date.now
    }
});

volunteerJobSchema.virtual('numApplications').get(function() {
    return this.applications.length;
});

const VolunteerJob = mongoose.model('VolunteerJob', volunteerJobSchema);

module.exports = VolunteerJob;
