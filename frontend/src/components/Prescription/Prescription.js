import React, { useEffect } from 'react';
import UpadateCanvas from "./script"
import  './prescription.css';
import { json, useLocation,useNavigate } from 'react-router-dom';


const Prescription = ( ) => {

  const location = useLocation();
  const navigate = useNavigate();
  

  let appointment = location.state?.appointment;

  useEffect(() => {
    appointment = location.state?.appointment;
    if (!appointment) {
      // Navigate to /appointments
      // Add your navigation logic here
      console.log(appointment);
      navigate('/appointments');
  
  
    }
    UpadateCanvas();
  }, [location]);
  
  return (
    <>
    <p id='data' data-user = {JSON.stringify(appointment)}>
    </p>
      <div className="container">
        <div className="menu">
          {/* <button id="color-menu-button" className="menu-button" type="button">Color</button>
          <div id="color-menu" className="color-menu"> */}
          <button id='undo-button' className='mb-2'> undo</button>
            <button id="black-color-button" className="color-button mb-2" type="button">
              <span className="bullet black-bullet"></span>
              Black
            </button>
            <button id="blue-color-button" className="color-button mb-2" type="button">
              <span className="bullet blue-bullet"></span>
              Blue
            </button>
            <button id="red-color-button" className="color-button mb-2" type="button">
              <span className="bullet red-bullet"></span>
              Red
            </button>
          </div>
        {/* </div> */}
        <canvas id="drawing-area" className="drawing-area" height="800" width="600"></canvas>
        <div className="action" style={{ textAlign: 'center' }}>
          
          <button id="clear-button" className="clear-button mt-2" type="button" style={{ borderRadius: '5px', backgroundColor: 'red' , border: 'transparent' }}>Clear</button>&nbsp;&nbsp;
          <button id="save-button" className="save-button mt-2" type="button" style={{ borderRadius: '5px', backgroundColor: '#4CAF50', border: 'transparent' }}>Save</button>
        </div>
      </div>
    </>
  ); 
};

export default Prescription;
