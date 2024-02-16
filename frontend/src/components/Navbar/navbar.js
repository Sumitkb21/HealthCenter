// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import logo from "./logo.png"
// import profile from "./profile.png";
// import "./navbar.css";

// export default function Navbar() {
//   const [isVisible,setIsVisible]=useState(true);
//   const handleProfileLogo = () => {
//     if (!isVisible) {
//       setTimeout(() => {
//         setIsVisible(!isVisible);
//       }, 100);
//     } else {
//       setIsVisible(!isVisible);
//     }
//   };
  
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid my-0" >
//           <NavLink className="navbar-brand" href="#">
//           <div className="logo-cls my-0">
//               <img className="my-0" src={logo} alt="logo" width="40px" height="38px" srcset="" />
//               <h5  style={{ marginLeft:'10px', marginTop:'5px',background: 'linear-gradient(to right,  #84D25A, #0194B6)', WebkitBackgroundClip: 'text', color: 'transparent',fontFamily:'Helvetica Neue'}}> <b> HEALTH CENTER</b></h5>
//             </div>

            
//           </NavLink>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//             onClick={handleProfileLogo}
//           >
//           <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent" >
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <NavLink
//                   className="nav-link active"
//                   aria-current="page"
//                   to="/"
//                 >
//                   <h5>Home</h5>
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link active" to="/pastrecords">
//                 <h5>Past Records</h5> 
//                 </NavLink>
//               </li>
//               <li className="nav-item">
             
//               <div className="logo-cls" style={{marginTop:'-2px'}}>    
//               <NavLink className="nav-link active" to="/profile">    
//                   <h5 style={{marginRight:'10px',paddingBottom:"2px"}}>Profile Image </h5> 
//                   { isVisible && (
//                     <img className="pb-1" src={profile} alt="profile" width="40px" height="38px" srcSet="" />
//                     )
//                   }
//                 </NavLink>
//               </div>
//               <div class="dropdown">
//                 <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                   Profile 
//                 </button>
//                 <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                   <a class="dropdown-item" href="#">Action</a>
//                   <a class="dropdown-item" href="#">Another action</a>
//                   <a class="dropdown-item" href="#">Something else here</a>
//                 </div>
//               </div>
            
               
//               </li>
//             </ul>
            
//           </div>
//         </div>
        
//       </nav>
//     </>
//   );
// }

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
import profile from "./profile.png";
import "./navbar.css";

export default function Navbar() {
  const [isVisible,setIsVisible]=useState(true);
    const handleProfileLogo = () => {
      if (!isVisible) {
        setTimeout(() => {
          setIsVisible(!isVisible);
        }, 100);
      } else {
        setIsVisible(!isVisible);
      }
    };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid my-0">
          <NavLink className="navbar-brand" to="/">
            <div className="logo-cls">
              <img src={logo} alt="logo" width="40px" height="38px" />
              <h5 style={{ marginLeft: '10px', marginTop: '5px', background: 'linear-gradient(to right,  #84D25A, #0194B6)', WebkitBackgroundClip: 'text', color: 'transparent', fontFamily: 'Helvetica Neue' }}> <b> HEALTH CENTER</b></h5>
            </div>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleProfileLogo}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  <h5>Home</h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/pastrecords">
                  <h5>Past Records</h5>
                </NavLink>
              </li>
              { isVisible ? (
                <li className="nav-item dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Profile
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <NavLink className="dropdown-item" to="/profile">Profile</NavLink>
                    <NavLink className="dropdown-item" to="/settings">Settings</NavLink>
                    <div className="dropdown-divider"></div>
                    <NavLink className="dropdown-item" to="/logout">Logout</NavLink>
                  </div>
                </li>
                ):
                (<>
                <li className="nav-item">
                <NavLink className="nav-link active" to="/pastrecords">
                  <h5>Edit Profile</h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/pastrecords">
                  <h5>Login</h5>
                </NavLink>
              </li>
                </>)
              }

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

