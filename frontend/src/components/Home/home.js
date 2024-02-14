import React from 'react';
import Navbar from '../Navbar/navbar';
import './home.css';
import bg from "./slider.jpg"

export default function Home() {
  return (
    <>
    <div className="Home">
      <div className="LeftHalf">
        <h1 className="CenterText">Consult your health with IITK Health Center</h1>
      </div>
      <div className="RightHalf">
        {/* <img src={bg} className='bgimage' alt="IITK Health Center" /> */}
      </div>
    </div>
    </>
  );
}
