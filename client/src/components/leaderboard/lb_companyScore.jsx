import React, { useEffect, useState } from 'react'
import { getOptions, pageBaseUrl } from '../../utils/general'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function Lb_companyScore({companyID}) {


    const [globalBoard, setglobalBoard] = useState({companyName:"",employeeList:[]})

    useEffect(()=>{
        const globalBoardFetch=async()=>{
            try {
                const response= await fetch(`${pageBaseUrl}leaderboard/company/score/${companyID}`,getOptions)
                const data=await response.json()
                if(data.companyName){
                    console.log(data)
                    setglobalBoard(data)
                }
                else{
                    console.log("global_board",data)
                }

            }catch(e){
                console.log("global_board",e)

            }
        }
        globalBoardFetch()
    },[companyID])


  
  
    return (
        <TableContainer component={Paper}>
              <h1 style={{textAlign:'center'}}>Score Leaderboard: {globalBoard.companyName}  </h1>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell align="right">Level</TableCell>
            <TableCell align="right">profession</TableCell>
            <TableCell align="right">user</TableCell>
            <TableCell align="right">XP</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {globalBoard.employeeList.map((row,ind) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
                {ind+1}.
              </TableCell>
              <TableCell align="right">{row.Level}</TableCell>
              <TableCell align="right">{row.profession}</TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">{row.currentXP}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default Lb_companyScore