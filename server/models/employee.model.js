const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema(
    {
        id: {type: String},
        username: {type: String, required:true},
        email:{type: String, required:true},
        password:{type: String, required:true},
        firstName:{type: String},
        lastName:{type: String},
        profession:{type: String},
        currentXP:{type: Number , default: 0},
        Level:{type: Number , default: 1},
        totalVolunteer:{type: Number , default: 0},
        company:{type: String},
        phone:{type: String},
        achievements: {type: mongoose.Types.ObjectId, ref: "Achievements" },
        imageUrl: {type:String ,default:"https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"},
    }
)

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = { Employee }
