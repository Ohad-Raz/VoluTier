import React, { useEffect, useState } from 'react'
import { getOptions, pageBaseUrl } from '../../utils/general'

function LeaderBoard() {

    const [globalBoard, setglobalBoard] = useState([])

    useEffect(()=>{
        const globalBoardFetch=async()=>{
            try {
                const response= await fetch(`${pageBaseUrl}leaderboard/global`,getOptions)
                const data=await response.json()
                if(data.globalScores){
                    console.log(data.globalScores)
                    setglobalBoard(data.globalScores)
                }
                else{
                    console.log("global_board",data)
                }

            }catch(e){
                console.log("global_board",e)

            }
        }
        globalBoardFetch()
    },[])



    const GlobalCard=(companyObj)=>{
        return(
        <div>
            <div>{companyObj.companyName}</div>
            <div>{companyObj.totalVolunteer}</div>
        </div>
        )
    }

  
  
    return (
        <div>
            {globalBoard.map(GlobalCard)}
        </div>
    )
}



export default LeaderBoard