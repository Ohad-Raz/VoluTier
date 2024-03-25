const mongoose = require('mongoose')

const companySchema = new mongoose.Schema(
    {
        id: {type: String},
        email:{type: String, required:true},
        password:{type: String, required:true},
        companyName:{type: String, required:true},
        about:{type: String},
        totalVolunteer:{type: Number , default: 0},
        employeeList: [{type: mongoose.Types.ObjectId, ref: "Employee" }],
        imageUrl: {type:String ,default:"https://w7.pngwing.com/pngs/408/205/png-transparent-wix-com-web-application-livechat-email-miscellaneous-text-logo.png"},
    }
)

const Company = mongoose.model("Company", companySchema);

module.exports = { Company }
