import React from 'react';
import "./appointments.css";
import { FaEye } from 'react-icons/fa';
import { Link ,useNavigate} from 'react-router-dom';
import {useState , useEffect} from 'react';

const Appointments = () => {
    const navigate =useNavigate();
    const appointments = [
        { doctorName: 'Dr. Smith', patientName: 'John Doe', queueNo: 'A001', pfNo: 'PF123', date: '2024-02-10' },
        { doctorName: 'Dr. Johnson', patientName: 'Jane Smith', queueNo: 'A002', pfNo: 'PF456', date: '2024-01-25' },
        { doctorName: 'Dr. Johnson', patientName: 'Jane Smith', queueNo: 'A003', pfNo: 'PF789', date: '2024-01-25' },
        // Add more records as needed
    ];
  return (
    <div className="page">
    <section className='appointments'>
      <h2>Appointments</h2>
      <div className="appointment-container">
        {appointments.map((appointment, index) => (
          <div key={index} className="appointment-box">
            <span>
              <strong>Patient Name:</strong> {appointment.patientName},&nbsp;&nbsp;
              <strong>Date:</strong> {appointment.date}
            </span>&nbsp;&nbsp;&nbsp;
            <button
                className="view-prescription-button"
                id="view-prescription"
                
                onClick={() => navigate('/prescription', {state: {appointment: appointment}})}
                >
                <FaEye /> View Prescription
            </button>
          </div>
          
        ))}
      </div>
    </section>
    </div>
  )
}

export default Appointments
