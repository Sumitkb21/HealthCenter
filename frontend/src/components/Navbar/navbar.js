import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png"
import "./navbar.css";

export default function Navbar() {
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
                <NavLink className="nav-link active" to="/pastrecords">
                <h5>Past Records</h5> 
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
