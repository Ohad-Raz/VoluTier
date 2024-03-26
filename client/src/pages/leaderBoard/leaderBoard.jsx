import React, { useContext, useEffect, useState } from 'react'
import { getOptions, pageBaseUrl } from '../../utils/general'
import Lb_global from '../../components/leaderboard/lb_global'
import Lb_EmpGlobal from '../../components/leaderboard/lb_EmpGlobal'
import Lb_companyScore from '../../components/leaderboard/lb_companyScore'
import Lb_companyVol from '../../components/leaderboard/lb_companyVol'
import { UserContext } from '../../context/UserContext'

function LeaderBoard() {

    const {UserID,UserObj}=useContext(UserContext)
    const role=UserObj.role??""
    


    return(
        
    <div style={{display:'flex',flexDirection:'column',rowGap:'20px'}}>
        <Lb_global/>
        <Lb_EmpGlobal/>
        {
            UserID&&role!='business'?<>
              <Lb_companyScore companyID={role=='company'?UserID:UserObj.company.id}/>
                <Lb_companyVol companyID={role=='company'?UserID:UserObj.company.id}/>

            </>:
            <h1 style={{textAlign:'center',backgroundColor:'red',color:'white'}}>login to show more</h1>
        }
      
    </div>)
}



export default LeaderBoard