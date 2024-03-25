const express = require("express");
const cors = require("cors");
const employeeRoute = require('./routes/employee.routes')
const comapnyRoute = require('./routes/company.routes')
const leaderRoute=require("./routes/leaderboard.routes")
const volunteerJobRoute=require('./routes/volunteerJob.routes')
const businessRoute = require('./routes/business.routes')


const app = express();
app.use(express.json());
app.use(cors());


app.use("/api/v1/company",comapnyRoute)
app.use("/api/v1/employee",employeeRoute)
app.use("/api/v1/leaderboard",leaderRoute)
app.use('/api/v1/volunteerJobs', volunteerJobRoute);
app.use("/api/v1/business",businessRoute)



module.exports = { app};