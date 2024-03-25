const { Company } = require("../models/company.model")

const getEmployeeScores=async(req,res)=>{
    {

    }

}

const getGlobalScores=async(req,res)=>{
    try{
        const globalScores=await Company.find({})
        .select('companyName totalVolunteer id')
        globalScores.sort((a,b)=>{
            return b.totalVolunteer-a.totalVolunteer
        })
        res.send(globalScores)

    }catch(e){
        console.log("globalScores",e)
        res.status(400).send("Error")
    }

}


module.exports={getGlobalScores}