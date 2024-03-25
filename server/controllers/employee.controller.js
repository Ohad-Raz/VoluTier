const { Employee } = require('../models/employee.model')
const bcrypt = require("bcryptjs")
const { generateToken } = require('../utils/jwt')

const Register = async (req, res) => {
    try {
        const body = req.body;
        const hash = await bcrypt.hash(body.password, 10);
        body.password = hash;
        const employee = new Employee(body);
        employee.id = employee._id;
        await employee.save();
        res.status(200).send(employee);
    } catch (err) {
        res.status(400).send("Error");
    }
};

const Login = async (req, res) =>{
    const {email, password} = req.body;
    try{
        const employee = await Employee.findOne({email})
        if(employee){
        const isMatch = await bcrypt.compare(password, employee.password)
        if(isMatch){
            const token = generateToken({id: employee._id ,email: employee.email, role: "employee"})
        return res.send({employee, token});
    } 
    return res.status(401).send("Email or password are incorrect");
    };
    return res.status(401).send("Email or password are incorrect");
    }
    catch(err){
        res.status(400).send("Cannot Log in")
    }
}


module.exports = {Register, Login};
