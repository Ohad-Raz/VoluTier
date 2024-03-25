const { Company } = require('../models/company.model')
const { Employee } = require('../models/employee.model');
const bcrypt = require("bcryptjs")
const { generateToken } = require('../utils/jwt')

const getCompanies = async (req, res) => {
    try {
    const query =  req.query
    const company = await Company.find({...query})
    res.send(company)
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const Register = async (req, res) => {
    try {
        const body = req.body;
        const hash = await bcrypt.hash(body.password, 10);
        body.password = hash;
        const company = new Company(body);
        company.id = company._id;
        await company.save();
        res.status(200).send(company);
    } catch (err) {
        res.status(400).send("Error");
    }
};

const Login = async (req, res) =>{
    const {email, password} = req.body;
    try{
        const company = await Company.findOne({email})
        if(company){
        const isMatch = await bcrypt.compare(password, company.password)
        if(isMatch){
            const token = generateToken({id: company._id ,email: company.email, role: "company"})
        return res.send({company, token});
    } 
    return res.status(401).send("Email or password are incorrect");
    };
    return res.status(401).send("Email or password are incorrect");
    }
    catch(err){
        res.status(400).send("Cannot Log in")
    }
}

const updateCompany = async (req, res) => {
    try {
        const { companyId } = req.params;
        const updatedCompany = await Company.findByIdAndUpdate(companyId, req.body, { new: true });
        if (!updatedCompany) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.status(200).json(updatedCompany);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteCompany = async (req, res) => {
    try {
        const { companyId } = req.params;
        const deletedCompany = await Company.findByIdAndDelete(companyId);
        if (!deletedCompany) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.status(200).json({ message: 'Company deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const addEmployeeToCompany = async (req, res) => {
    const { employeeId, companyId } = req.body;
    try {
        const company = await Company.findById(companyId);
        if (!company) {
            return res.status(404).send("company not found");
        }
        company.employeeList.push(employeeId); // Push the employeeId directly
        await company.save();
        res.status(200).send("Employee added to company successfully");
    } catch (err) {
        console.error(err);
        res.status(400).send("Cannot add employee, bad request");
    }
};

module.exports = {Register, Login, getCompanies, deleteCompany, updateCompany, addEmployeeToCompany};