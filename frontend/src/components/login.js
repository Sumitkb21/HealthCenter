import React, { useState } from 'react'
import './navbar.css'
import Navbar from './navbar'
import axios from "axios" ;

export default function Login() {
    const [pfnumber, setpfnumber] = useState('');
    const [password, setpassword] = useState('');
    

    
    const submit = async(e)=>{
         e.preventDefault();
         try {
            
            const user  = await axios.post("http://localhost:4000/api/v1/users/login",{
                pfnumber:pfnumber , 
                password:password,
            });

            console.log(user);
            // console.log("tere naam ");
         }catch(e) {
            console.log("user does not exist");
         }
    }

    return (
    <>

    <Navbar/>
    <h1 style={{ textAlign: "center" }}>Login Page</h1>  
    <form action="POST">
    <div className='form'>

      <input type="string" name="pfnumber" onChange={(e)=>{setpfnumber(e.target.value)} } placeholder='PF number' /><br />
      <input type="text" name="passwors" onChange={(e)=>{setpassword(e.target.value)} } placeholder='Password' /><br />
      
      <button type='submit' onClick={submit}> Submit</button>
      </div>
       
    </form>
    </>
  )
}