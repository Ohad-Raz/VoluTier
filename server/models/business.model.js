const mongoose = require('mongoose')

const businessSchema = new mongoose.Schema(
    {
        id: {type: String},
        email:{type: String, required:true},
        password:{type: String, required:true},
        name:{type: String, required:true},
        about:{type: String},
        imageUrl: {type:String ,default:"https://w7.pngwing.com/pngs/699/368/png-transparent-community-volunteering-organization-business-voluntary-association-icon-friendship-community-volunteering-organization-thumbnail.png"},
    }
)

const Business = mongoose.model("Business", businessSchema);

module.exports = { Business }
