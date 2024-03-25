const { Business } = require('../models/business.model')
const bcrypt = require("bcryptjs")
const { generateToken } = require('../utils/jwt')

const getBusinesses = async (req, res) => {
    try {
        const query =  req.query
        const business = await Business.find({...query})
        res.send(business)
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const Register = async (req, res) => {
    try {
        const body = req.body;
        const hash = await bcrypt.hash(body.password, 10);
        body.password = hash;
        const business = new Business(body);
        business.id = business._id;
        await business.save();
        res.status(200).send(business);
    } catch (err) {
        res.status(400).send("Error");
    }
};

const Login = async (req, res) =>{
    const {email, password} = req.body;
    try{
        const business = await Business.findOne({email})
        if(business){
        const isMatch = await bcrypt.compare(password, business.password)
        if(isMatch){
            const token = generateToken({id: business._id ,email: business.email, role: "business"})
        return res.send({business, token});
    } 
    return res.status(401).send("Email or password are incorrect");
    };
    return res.status(401).send("Email or password are incorrect");
    }
    catch(err){
        res.status(400).send("Cannot Log in")
    }
}

const updateEmployee = async (req, res) => {
    try {
        const { employeeId } = req.params;
        const updatedEmployee = await Employee.findByIdAndUpdate(employeeId, req.body, { new: true });
        if (!updatedEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json(updatedEmployee);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteEmployee = async (req, res) => {
    try {
        const { employeeId } = req.params;
        const deletedEmployee = await Employee.findByIdAndDelete(employeeId);
        if (!deletedEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};


module.exports = {Register, Login, getBusinesses, deleteEmployee, updateEmployee};
