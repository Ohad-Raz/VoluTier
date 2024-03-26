import React, { useEffect, useState } from 'react'
import { getOptions, pageBaseUrl } from '../../utils/general'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function Lb_global() {
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


  
  
    return (
        <TableContainer  component={Paper}>
            <h1 style={{textAlign:'center'}}>Global Company Rank</h1>
      <Table sx={{ minWidth: '350px' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>rank</TableCell>
            <TableCell align="right">company</TableCell>
            <TableCell align="right">volunteering amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {globalBoard.map((row,ind) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
                {ind+1}.
              </TableCell>
              <TableCell align="right">{row.companyName}</TableCell>
              <TableCell align="right">{row.totalVolunteer}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default Lb_global