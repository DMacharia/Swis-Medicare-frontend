import React, { useEffect, useState } from "react";

const patientsAPI = "https://swis-medicare-eblx.onrender.com/api/v1/patients";

const Patients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch(patientsAPI)
      .then((response) => response.json())
      .then((data) => setPatients(data));
  }, []);

  return (
    <div className="patient">
      <h2>Patients List</h2>
        {patients.map((patient) => (
          <div key={patient.id}>
            <div>{patient.username}</div>
            <span>
              {patient.first_name} {patient.second_name}
            </span>
            <div>{patient.email}</div>
            <div>{patient.mobile_no}</div>
            <div>{patient.address}</div>
            <div>{patient.gender}</div>
            <div>{patient.blood_group}</div>
            <div>{patient.date_of_birth}</div>
            <div>{patient.patient_histories}</div>
          </div>
        ))}
    </div>
  );
};

export default Patients;
