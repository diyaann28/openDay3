import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Second = (props) => {
    var[name, setName]= useState();
    const changename=()=>{
        console.log("btn clicked");
        setName("Home");
    }
    const conName=()=>{
        console.log("con clicked");
        setName("contact");
    }
  return (

    <div style={{margin:'20%',textAlign:'center'}} >
        <Typography variant='h3'>Welcome to {props.place} </Typography>
        <br/>
      <Button variant="outlined" onClick={changename}>Home</Button> &nbsp;
      <Button variant="contained" color='secondary' onClick={conName}>Contact</Button> 
      
      
    </div>
  )
}

export default Second