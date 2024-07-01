import { useState } from 'react'
import './App.css'
import Third from './components/Third'
import First from './components/First'
import Second from './components/Second'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Table1 from './components/Table1'


function App() {


  return (
    <>
  <Navbar/>
  <Routes>
    <Route path="/" element={<First name="diya"/>}/>
    <Route path="/s" element={<Second place="tvm"/>}/>
    <Route path="/t" element={<Third data={{name:"diyu",age:10}}/>}/>
    <Route path="/a" element={<Table1/>}/>
    
  </Routes>
  
    </>
  )
}

export default App
