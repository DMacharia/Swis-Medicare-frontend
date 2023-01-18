import React, { useEffect, useState } from "react";
import "./patients.css";

const patientsAPI = "https://swis-medicare-asgm.onrender.com/api/v1/patients";

const Patients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch(patientsAPI)
      .then((response) => response.json())
      .then((data) => setPatients(data));
  }, []);

  return (
    <div className="patient-container">
      <h2 className="patient-h2">Patients List</h2>
      <div className="patient-grid">
        {patients.map((patient) => (
          <div className="patient-card" key={patient.id}>
            <div className="patient-card-header">
              <div className="patient-card-name">
                {patient.first_name} {patient.second_name}
              </div>
              <div className="patient-card-username">{patient.username}</div>
            </div>
            <div className="patient-card-body">
              <div className="patient-card-info">
                <div>Email: {patient.email}</div>
                <div>Mobile No: {patient.mobile_no}</div>
                <div>Address: {patient.address}</div>
              </div>
              <div className="patient-card-info">
                <div>Gender: {patient.gender}</div>
                <div>Blood Group: {patient.blood_group}</div>
                <div>Date of Birth: {patient.date_of_birth}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Patients;

