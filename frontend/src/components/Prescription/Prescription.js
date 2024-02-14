import React, { useEffect } from 'react';
import UpadateCanvas from "./script"
import  './prescription.css';


const Prescription = () => {
  useEffect(() => {
    UpadateCanvas();
  }, [ ]);

  return (
    <>
      <div className="container">
        <div className="menu">
          {/* <button id="color-menu-button" className="menu-button" type="button">Color</button>
          <div id="color-menu" className="color-menu"> */}
            <button id="black-color-button" className="color-button" type="button">Black</button>
            <button id="blue-color-button" className="color-button" type="button"> Blue </button>
            <button id="red-color-button" className="color-button" type="button"> Red </button>
          </div>
        {/* </div> */}
        <canvas id="drawing-area" className="drawing-area" height="800" width="600"></canvas>
        <div className="action" style={{ textAlign: 'center' }}>
          <button id="clear-button" className="clear-button" type="button">Clear</button>
          <button id="save-button" className="save-button" type="button"> Save</button>
        </div>
      </div>
    </>
  ); 
};

export default Prescription;
