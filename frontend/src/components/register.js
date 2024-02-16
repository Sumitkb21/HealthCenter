import React, {useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faHashtag,faLock,faEnvelope,faCircleUser} from '@fortawesome/free-solid-svg-icons';
import './form.css'


export default function Register() {
    //  const history = useNavigate() ; 
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [pfnumber, setPfnumber] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');



    return (
    <div className="reg">
      <h2 style={{textAlign:'center',color:'white', fontFamily: 'Helvetica Neue'}}>Registration Form</h2>

<form className='card'>
    <div className='form my-4' style={{textAlign:'center'}}>    
        <div className='text-center my-2'>
          <FontAwesomeIcon className="icon-wrapper"  icon={faUser} />&nbsp;&nbsp;<input type="string" name="firstname" value={firstname} onChange={(e)=>{setFirstname(e.target.value)} } placeholder="First number" required />
        </div>
        <div className='text-center my-2'>
          <FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;<input type="text" name="lastname" value={lastname} onChange={(e)=>{setLastname(e.target.value)} } placeholder='lastname' required  />
        </div>
        <div className='text-center my-2'>
          <FontAwesomeIcon icon={faCircleUser} />&nbsp;&nbsp;<input type="text" name="username" value={username} onChange={(e)=>{setUsername(e.target.value)} } placeholder='username' required /><br />
        </div>
        <div className='text-center my-2'>
          <FontAwesomeIcon icon={faHashtag} />&nbsp;&nbsp;<input type="text" name="pfnumber" value={pfnumber} onChange={(e)=>{setPfnumber(e.target.value)} } placeholder='PF number' required /><br />
        </div>
        <div className='text-center my-2'>
          <FontAwesomeIcon icon={faLock} />&nbsp;&nbsp;<input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)} } placeholder='Password' required /><br />
        </div>
        <div className='text-center my-2'>
          <FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;<input  name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' pattern=".+@iitk\.ac\.in" title="Please enter a IITK email address" required /><br />
        </div>
        <div className='text-center my-2'>
          <button  type='submit' >Sign Up</button>
        </div>
        <div className='text-center my-2'>
          Already have an account?  <Link  to="/login" >Sign In</Link>
        </div>

      </div>
    </form>
    </div>
  )
}