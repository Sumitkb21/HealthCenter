import React from 'react';
import "./appointments.css";
import { FaEye,FaSearch } from 'react-icons/fa';
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
    // const [hosts, setHosts] = useState([]);
    const [searchResults, setSearchResults] = useState(appointments);
    const handleSubmit = (e) => e.preventDefault();

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(appointments);

            const searchString = e.target.value.toLowerCase();
            const resultsArray = appointments.filter(
                (appointment) =>
                Object.values(appointment).some(value =>
                    value.toLowerCase().includes(searchString)
                )
        
            );
            setSearchResults(resultsArray);
        };
    
    
      
  return (
    <div className="page2">
    <section className='appointments'>
      <h2>Appointments</h2>
      <div className="appointment-container">

      <form className="search" onSubmit={handleSubmit}>
      <div className="search__input-container">
        <input
          className="search__input"
          type="text"
          id="search"
          placeholder='Search for appointments'
          onChange={handleSearchChange}
        />
        <button type="submit" className="search__button">
          <FaSearch />
        </button>
      </div>
    </form>
        
        {searchResults.map((appointment, index) => (
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
