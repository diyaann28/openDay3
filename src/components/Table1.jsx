import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';



export default function Table1() {
    var[output,setOutput]=React.useState([])
    React.useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            console.log(res.data);
            setOutput(res.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{color:"blue",fontFamily:"cursive",fontSize:"20px"}}>NAME</TableCell>
            <TableCell style={{color:"blue",fontFamily:"cursive",fontSize:"20px"}}>CITY</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {output.map((val,i)=>{
                return(
                    <TableRow>
                        <TableCell>
                            {val.name}
                        </TableCell>
                        <TableCell>
                            {val.address.city}
                        </TableCell>
                    </TableRow>
                )
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}