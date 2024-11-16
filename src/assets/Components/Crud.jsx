
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import  Button  from '@mui/material/Button';
import { TextField } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
 const empdata=[
    {
        id : 1,
        name : 'Jeeva',
        age : 27,
        isactive:1
    },
    {
        id : 2,
        name : 'Veena',
        age : 25,
        isactive:1
    },
    {
        id : 3,
        name : 'Reshmi',
        age : 25,
        isactive:1
    },
 ]

const Crud = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
   
    const[data,setData]=useState([]);
    useEffect(()=>{
       setData(empdata);
    },[])


    const Add = async(event) => {

        event.preventDefault(); // Prevent the default form submission  
        alert(`Email: ${name}, Password: ${age}`);

        try {
            const response = await fetch('https://localhost:7183/Register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ Name:name, Age:age,Id:23,Password:'ewwtt',Email:'gmail@com'}),
            });
        
            if (response.ok) {
              const data = await response.json();             
              console.log('Registration successful'); 
              alert(data.message);             
            }          
             
          } catch (error) {
            console.error('Registration error:', error);     
          }
   
       }
  return (
    <div>
        <TableContainer component={Paper}>
    <TableRow>
        <TableCell>
        <TextField id="outlined-basic" label="ENTER NAME" variant="outlined" value={name} onChange={(e)=>setName(e.target.value)}/>

        </TableCell>
        <TableCell>
        <TextField id="outlined-basic" label="ENTER AGE" variant="outlined" value={age} onChange={(e)=>setAge(e.target.value)}/>

        </TableCell>
        <TableCell>
        <Button variant="contained" color="primary" onClick={Add}>Add</Button>

        </TableCell>
    </TableRow>
        </TableContainer>    
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Age</StyledTableCell>
            <StyledTableCell align="right">Isactive</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
                  <TableBody>
                      {
                          data && data.length > 0 ?
                              data.map((item, index) => {
                                  return (
                                      <StyledTableRow key={index}>
                                          <StyledTableCell component="th" scope="row">
                                              {index + 1}
                                          </StyledTableCell>
                                          <StyledTableCell align="right">{item.name}</StyledTableCell>
                                          <StyledTableCell align="right">{item.age}</StyledTableCell>
                                          <StyledTableCell >{item.isactive}</StyledTableCell>
                                          <Stack direction="row" spacing={5}>
                                          <Button variant="contained" color="success">Edit</Button>
                                           <Button variant="contained" color="error">Delete</Button>

                                          </Stack>
                                      </StyledTableRow>
                                  )
                              })
                              :
                              'loading...'
                      }
                  </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Crud
