const { Company } = require("../models/company.model")
const { Employee } = require("../models/employee.model")

const getEmployeeScores=async(req,res)=>{
    try {
        const {companyID}=req.params
        const leaderBoard=await Company.findById(companyID)
        .select('employeeList companyName')
        .populate({path:'employeeList',select:'id currentXP username' })

        leaderBoard.employeeList.sort((a,b)=>{
            return b.currentXP-a.currentXP
        })


        res.send(leaderBoard)
    } catch (error) {
        console.log("getEmployeeScore",e)
        res.status(400).send("Error")
    }
}

const getEmployeeVol=async(req,res)=>{
    try {
        const {companyID}=req.params
        const leaderBoard=await Company.findById(companyID)
        .select('employeeList companyName')
        .populate({path:'employeeList',select:'id totalVolunteer username' })

        leaderBoard.employeeList.sort((a,b)=>{
            return b.totalVolunteer-a.totalVolunteer
        })


        res.send(leaderBoard)
    } catch (error) {
        console.log("getEmployeeScore",e)
        res.status(400).send("Error")
    }    



}




const getGlobalScores=async(req,res)=>{
    try{
        const globalScores=await Company.find({})
        .select('companyName totalVolunteer id')
        globalScores.sort((a,b)=>{
            return b.totalVolunteer-a.totalVolunteer
        })
        res.send({globalScores})

    }catch(e){
        console.log("globalScores",e)
        res.status(400).send("Error")
    }

}

const getGlobalEmpScores=async(req,res)=>{
    try{
        const globalScores=await Employee.find({})
        .select('username currentXP company id')
        globalScores.sort((a,b)=>{
            return b.totalVolunteer-a.totalVolunteer
        })
        res.send({globalScores})

    }catch(e){
        console.log("globalScores",e)
        res.status(400).send("Error")
    }

}


module.exports={getGlobalScores,getEmployeeScores,getEmployeeVol}