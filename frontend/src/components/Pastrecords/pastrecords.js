import React from 'react';
import "./pastrecords.css";
import { FaEye } from 'react-icons/fa';
import {useState , useEffect} from 'react';

const Pastrecords = () => {
  const patientRecords = [
    { patientName: 'John Doe', doctorName: 'Dr. Smith', date: '2024-02-10' ,imageURL: "https://res.cloudinary.com/dsr4m1th2/image/upload/v1707758604/u8ap4xlezsasaeqlkyrg.png"},
    { patientName: 'Jane Smith', doctorName: 'Dr. Johnson', date: '2024-01-25', imageURL: "https://res.cloudinary.com/dsr4m1th2/image/upload/v1707758604/u8ap4xlezsasaeqlkyrg.png" },
    { patientName: 'Jane Smith', doctorName: 'Dr. Johnson', date: '2024-01-25', imageURL: "https://res.cloudinary.com/dsr4m1th2/image/upload/v1707758604/u8ap4xlezsasaeqlkyrg.png" },
    // Add more records as needed
  ];
  // const openImage = (imageURL) => {
  //   // Logic to open the image, for example, using window.open()
  //   window.open(imageURL);
  // };
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Set initial state when component mounts
    closeModal();
  }, []);
  const openImage = (imageURL) => {
    console.log(selectedImage,showModal);
    setSelectedImage(imageURL);
    setShowModal(true);
  };

  const closeModal = () => {
    console.log(selectedImage,showModal);
    setShowModal(false);
    setSelectedImage(null);
  };

  const handleSave = () => {
      const link = document.createElement('a');
      link.href= selectedImage;
      link.download= "record.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

  }

  return (
    
              <section className='pastrecords'>
                <h2>Past Records</h2>
                <div className="record-container">
                  {patientRecords.map((record, index) => (
                    <div key={index} className="record-box">
                      <span>
                        <strong>Patient Name:</strong> {record.patientName},&nbsp;&nbsp;
                        <strong>Doctor Name:</strong> {record.doctorName},&nbsp;&nbsp;
                        <strong>Date:</strong> {record.date}
                      </span>&nbsp;&nbsp;&nbsp;
                      <button className="view-prescription-button" onClick={() => openImage(record.imageURL)}>
                        <FaEye /> View Prescription
                      </button>
                    </div>
                  ))}
                </div>
                {showModal && (
                    <div className="mod">
                      <div className="modal-content">
                         <span className="close" onClick={()=>closeModal()}>&times;</span>
                      <img src={selectedImage} alt="Selected" />
                      <button onClick={handleSave}>Save</button>
                      </div>
                      </div>
                )}
              </section>
            
  );
}

export default Pastrecords;
