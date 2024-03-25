const { Company } = require('../models/company.model')
const bcrypt = require("bcryptjs")
const { generateToken } = require('../utils/jwt')

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

module.exports = {Register, Login};