import React, { useEffect, useState } from "react";
import "./singlepatient.css";


const singlePatientAPI = "http://127.0.0.1:3000/api/v1/patients/7";

const SinglePatient = () => {
  const [patient, setSinglePatient] = useState({});

  useEffect(() => {
    fetch(singlePatientAPI)
      .then((response) => response.json())
      .then((data) => setSinglePatient(data));
  }, []);

  return (
    <div className="patient-card">
      <div className="patient-name">
        <h3>Welcome!</h3>
        {patient.username}
      </div>
      <span>
        Name: {patient.first_name} {patient.second_name}
      </span>
      <div>Email: {patient.email}</div>
      <div>Mobile_no: {patient.mobile_no}</div>
      <div>Address: {patient.address}</div>
      <div>Gender: {patient.gender}</div>
      <div>Blood_group: {patient.blood_group}</div>
      <div>Date_of_birth: {patient.date_of_birth}</div>
      <hr />
      <h3>Patient Histories</h3>
      {patient.patient_histories &&
        patient.patient_histories.map((history) => (
          <div key={history.id} className="patient-history">
            <div>Blood_pressure: {history.blood_pressure}</div>
            <div>Blood_sugar: {history.blood_sugar}</div>
            <div>Diagnosis: {history.diagnosis}</div>
            <div>Medication: {history.medication}</div>
            <div>Notes: {history.notes}</div>
            <div>Pulse Rate: {history.pulse_rate}</div>
            <div>Temperature: {history.temperature}</div>
            <div>Test: {history.test}</div>
            <div>Weight: {history.weight}</div>
          </div>
        ))}
    </div>
  );
};

export default SinglePatient

