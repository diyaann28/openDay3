import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>
          <Button><Link to={"/"} style={{textDecoration:"none",color:"white"}}>First</Link></Button>
          <Button><Link to={"/s"} style={{textDecoration:"none",color:"white"}}>Second</Link></Button>
          <Button><Link to={"/t"} style={{textDecoration:"none",color:"white"}}>Third</Link></Button>
          <Button><Link to={"/a"} style={{textDecoration:"none",color:"white"}}>Table1</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
