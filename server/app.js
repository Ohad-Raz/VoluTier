const express = require("express");
const cors = require("cors");
const employeeRoute = require('./routes/employee.routes')
const comapnyRoute = require('./routes/company.routes')
const volunteerJobRoute = require('./routes/volunteerJob.routes');

const app = express();
app.use(express.json());
app.use(cors());


app.use("/api/v1/company",comapnyRoute)
app.use("/api/v1/employee",employeeRoute)
app.use('/api/v1/volunteerJobs', volunteerJobRoute);


module.exports = { app};