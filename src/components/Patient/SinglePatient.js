import React, { useEffect, useState } from "react";

const singlePatientAPI = "http://127.0.0.1:3000/api/v1/patients/7";

const SinglePatient = () => {
  const [patient, setSinglePatient] = useState({});

  useEffect(() => {
    fetch(singlePatientAPI)
      .then((response) => response.json())
      .then((data) => setSinglePatient(data));
  }, []);

  return (
    <div>
      <h2>Welcome!</h2>
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
      <hr />
      <h3>Patient Histories</h3>
      {patient.patient_histories &&
        patient.patient_histories.map((history) => (
          <div key={history.id}>
            <div>{history.blood_pressure}</div>
            <div>{history.blood_sugar}</div>
            <div>{history.diagnosis}</div>
            <div>{history.medication}</div>
            <div>{history.notes}</div>
            <div>{history.pulse_rate}</div>
            <div>{history.temperature}</div>
            <div>{history.test}</div>
            <div>{history.weight}</div>
          </div>
        ))}
    </div>
  );
};

export default SinglePatient

