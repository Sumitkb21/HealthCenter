import React ,{useContext}from "react";
import { NavLink ,Navigate} from "react-router-dom";
import logo from "./logo.png"

import { Context } from "../..";
import "./navbar.css";

export default function Navbar() {
  const {isAuthenticatedDoctor,isAuthenticatedNurse,isAuthenticatedLab,isAuthenticatedApollo,isAuthenticatedMedical, isAuthenticatedReception , isAuthenticated , setIsAuthenticated , loading , setLoading} =  useContext(Context);

  console.log("isAuthenticatedReception : ",isAuthenticatedReception);
  console.log("isAuthenticated : " , isAuthenticated);

  if(isAuthenticated){
    return <Navigate to="/profile"/> ;
  }

  if(isAuthenticatedReception){
    return <Navigate to="/receptionHome"/> ;
  }
  if(isAuthenticatedDoctor){
    return <Navigate to="/doctorHome"/> ; 
  }
  if(isAuthenticatedMedical){
    return <Navigate to="/medicalHome"/> ; 
  }
  if(isAuthenticatedApollo){
    return <Navigate to="/apolloHome"/> ; 
  }
  if(isAuthenticatedLab){
    return <Navigate to="/labHome"/> ; 
  }
  if(isAuthenticatedNurse){
    return <Navigate to="/nurseHome"/> ; 
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid my-0" >
          <NavLink className="navbar-brand" href="#">
          <div className="logo-cls my-0">
              <img className="my-0" src={logo} alt="logo" width="40px" height="38px" srcset="" />
              <h5  style={{ marginLeft:'10px', marginTop:'5px',background: 'linear-gradient(to right,  #84D25A, #0194B6)', WebkitBackgroundClip: 'text', color: 'transparent',fontFamily:'Helvetica Neue'}}> <b> HEALTH CENTER</b></h5>
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
          >
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  <h5>Home</h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/loginAs">
                <h5>Login</h5> 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/emailverification">
                <h5>Signup</h5> 
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
