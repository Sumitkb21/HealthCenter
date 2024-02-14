// import './App.css';
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home/home';
import Navbar from './components/Navbar/navbar';
import Pastrecords from './components/Pastrecords/pastrecords';
import Login from './components/login';
import Register from './components/register';
import Prescription from "./components/Prescription/Prescription";


function App() {
  return (
    <>
  <Navbar />
    <Routes>
    <Route path="/" element= {<Home/>}/>;
    <Route path ="/prescription" element={<Prescription/>} />;
    <Route path="/pastrecords" element= {<Pastrecords/>}/>;
    <Route path="/login" element= {<Login/>}/>;
    <Route path="/register" element= {<Register/>}/>;
   </Routes> 
   </>
   
  );

}

export default App;
