import React, { useState } from 'react'
import axios from "axios" ;
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope,faLock} from '@fortawesome/free-solid-svg-icons';
import './form.css'


export default function LoginStaff() {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    

    
    const submit = async(e)=>{
         e.preventDefault();
         try {
            
            const user  = await axios.post("http://localhost:4000/api/v1/users/login",{
                email:email , 
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
   <div className="reg">
      <h2 style={{textAlign:'center',color:'white', fontFamily: 'Helvetica Neue'}}>Login Form</h2>
    <form className='card' style={{ background:'#eeeeee'}}>
      <div className='form my-4' style={{textAlign:'center'}}>    
        <div className='text-center my-2'>
          <FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;<input type="email" name="email" onChange={(e)=>{setEmail(e.target.value)} } placeholder='Email' style={{fontFamily: 'Helvetica Neue'}} spellcheck="false"  /><br />
        </div>
        <div className='text-center my-2'>
          <FontAwesomeIcon icon={faLock} />&nbsp;&nbsp;<input type="text" name="password" onChange={(e)=>{setpassword(e.target.value)} } placeholder='Password' style={{fontFamily: 'Helvetica Neue'}} spellcheck="false"  /><br />
        </div>
        <div className='text-center my-2'>
          <button  id="click" type='submit' style={{border:'none',fontFamily: 'Helvetica Neue'}} >Sign In</button>
        </div>
        <div className='text-center my-2'>
          Create new account?  <Link  to="/register" style={{fontFamily: 'Helvetica Neue'}} >Sign Up</Link>
        </div>
      </div>
    </form>
    </div>
    </>
  )
}