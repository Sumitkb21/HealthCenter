// import './App.css';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home/home';
import Navbar from './components/Navbar/navbar';
import Pastrecords from './components/Pastrecords/pastrecords';
import Login from './components/login';
import Register from './components/register';
import Prescription from "./components/Prescription/Prescription";
import Appointments from './components/Doctor/appointments';
import LoginStaff from './components/loginStaff';


function App() {

  
  return (
    <>
  <Navbar />
    <Routes>
    <Route path="/" element= {<Home/>}/>;
    <Route path="/prescription" element={<Prescription />} />
    <Route path="/pastrecords" element= {<Pastrecords/>}/>;
    <Route path="/appointments" element= {<Appointments/>}/>;
    <Route path="/login" element= {<Login/>}/>;
    <Route path="/login/staff" element= {<LoginStaff/>}/>;
    <Route path="/register" element= {<Register/>}/>;
   </Routes> 
   </>
   
  );

}

export default App;
