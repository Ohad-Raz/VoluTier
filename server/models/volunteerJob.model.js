const mongoose = require("mongoose");

const volunteerJobSchema = new mongoose.Schema({
  id: {
    type: String
  },
  businessId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Business",
  },
  title: {
    type: String,
    required: true,
  },
  area:{
    type:String,
    required: true
  },
  location: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  
  maxAmount: {
    type: Number,
    required: true,
  },

  applicants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  estimatedHours: {
    type: Number,
    required: true,
  },
  imgURL: {
    type: String,
    required: true,
  },
  categories: {
    type: [String],
    required: true,
  },
  contactPhone: {
    type: String,
  },
  status: {
    type: String,
    enum: ["upcoming", "active", "closed", "cancelled", "completed"],
    default: "upcoming",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

volunteerJobSchema.virtual("numApplications").get(function () {
  return this.applicants.length;
});

const VolunteerJob = mongoose.model("VolunteerJob", volunteerJobSchema);

module.exports = VolunteerJob;
