const { Employee } = require('../models/employee.model')
const bcrypt = require("bcryptjs")
const { generateToken } = require('../utils/jwt');
const { Company } = require('../models/company.model');

const getEmployees = async (req, res) => {
    try {
        const query =  req.query
        const employee = await Employee.find({...query})
        res.send(employee)
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const getEmployee =  async(req,res)=>{
    try{
        const {role}=req.employee
        if(role=="employee"){
            const link = await Employee.findById(req.employee.id).populate("company")
            res.send({
                link:{...link._doc,role}
            })
        }else if(role=="company"){
            const link = await Company.findById(req.employee.id)
            res.send({
                link:{...link._doc,role}
            })
        }else{
            res.status(400).send("cannot find")
        }
        
    }
    catch(err){
        res.status(400).send("cannot find")
    }
}

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
        return res.send({user:employee, token});
    } 
    return res.status(401).send({message:"Email or password are incorrect"});
    };
    return res.status(401).send({message:"Email or password are incorrect"});
    }
    catch(err){
        res.status(400).send({message:"Cannot Log in"})
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

const updateLevelIfRequired = async (req, res) => {
    try {
        const employeeId = req.params.employeeId; 

        const employee = await Employee.findById(employeeId);
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        const xpThresholds = [15, 40, 70, 110, 160, 230, 320, 450, 620, 850];

        let newLevel = 1;
        for (let i = 0; i < xpThresholds.length; i++) {
            if (employee.currentXP >= xpThresholds[i]) {
                newLevel = i + 2;
            } else {
                break; 
            }
        }
        if (newLevel > employee.Level) {
            employee.Level = newLevel;
            await employee.save();
            return res.status(200).json({ message: `Employee level updated to level ${newLevel}` });
        } else {
            return res.status(200).json({ message: `Employee currentXP is ${employee.currentXP}, no level update required` });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};



module.exports = {Register, Login, getEmployees, deleteEmployee, updateEmployee, getEmployee, updateLevelIfRequired};
