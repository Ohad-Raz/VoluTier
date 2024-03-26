import React, { useEffect, useState } from 'react'
import { getOptions, pageBaseUrl } from '../../utils/general'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TablePagination } from '@mui/material';



function Lb_companyVol({companyID}) {

    const [globalBoard, setglobalBoard] = useState({companyName:"",employeeList:[]})
    const [page, pagechange] = useState(0);
    const [rowperpage, rowperpagechange] = useState(5);

    const handlechangepage = (event, newpage) => {
      pagechange(newpage)
    }
    const handleRowsPerPage = (event) => {
        rowperpagechange(+event.target.value)
        pagechange(0);
    }



    useEffect(()=>{
        const globalBoardFetch=async()=>{
            try {
                const response= await fetch(`${pageBaseUrl}leaderboard/company/vol/${companyID}`,getOptions)
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
        <TableContainer component={Paper} sx={{border:'solid'}}>
              <h1 style={{textAlign:'center'}}>Volunteer Leaderboard: {globalBoard.companyName}  </h1>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead sx={{backgroundColor:'darkcyan',color:'whitesmoke'}}>
          
            <TableCell sx={{flexGrow:1 ,color:'inherit'}}>Rank</TableCell>
            <TableCell sx={{flexGrow:1 ,color:'inherit'}}>Times volunteering</TableCell>
            <TableCell sx={{flexGrow:1 ,color:'inherit'}}>profession</TableCell>
            <TableCell sx={{flexGrow:1 ,color:'inherit'}}>user</TableCell>
          
        </TableHead>
        <TableBody>
          {globalBoard.employeeList
          .slice(page*rowperpage,page*rowperpage+rowperpage)
          .map((row,ind) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell sx={{flexGrow:1}}>
                {page*rowperpage+ind+1}.
              </TableCell>
              <TableCell sx={{flexGrow:1}}>{row.totalVolunteer}</TableCell>
              <TableCell sx={{flexGrow:1}}>{row.profession}</TableCell>
              <TableCell sx={{flexGrow:1}}>{row.username}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination  
        rowsPerPageOptions={[5, 10, 25]}
          rowsPerPage={rowperpage}
          page={page}
          count={globalBoard.employeeList.length}
          component="div"
          sx={{backgroundColor:'darkgray'}}
          onPageChange={handlechangepage}
          onRowsPerPageChange={handleRowsPerPage}
      />

    </TableContainer>
    )
}

export default Lb_companyVol