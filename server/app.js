const express = require("express");
const cors = require("cors");
const employeeRoute = require('./routes/employee.routes')
const comapnyRoute = require('./routes/company.routes')


const app = express();
app.use(express.json());
app.use(cors());


app.use("/api/v1/company",comapnyRoute)



module.exports = { app};