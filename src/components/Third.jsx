import { Button, TextField, Typography } from '@mui/material'
import React, {useState} from 'react'

const Third = (props) => {
    var[input,setInput] = useState("AA")
     var[output,setOutput]=useState();

    const inputHandler=(event)=>{
     console.log(event.target.value)
     setInput(event.target.value)
    }
const displayValue =()=>{
    console.log("button clicked")
    setOutput(input)
}
  return (
  <>
  <div>
    {props.data.name}
    <br/>
    {props.data.age}
    <Typography variant='h3'>Hello {output}</Typography>
    <br />
    <TextField label="Name" onChange={inputHandler}/>
    <br /><br />
    <Button variant='contained' color='success' onClick={displayValue}>Submit</Button>
  </div>
  </>
  )
}

export default Third
