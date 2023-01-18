import React, { useState, useEffect } from "react";
import "./histories.css";

function Histories() {
  const [patient, setPatient] = useState({});

  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/v1/patient/8")
      .then((response) => response.json())
      .then((data) => setPatient(data));
  }, []);
  return (
    <div className="histories">
      <h2>Medical Histories</h2>
      <table className="history-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Doctor</th>
            <th>Diagnosis</th>
            <th>Medication</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {patient.patient_histories &&
            patient.patient_histories.map((history) => (
              <tr key={history.id}>
                <td>{history.date}</td>
                <td>{history.doctor}</td>
                <td>{history.diagnosis}</td>
                <td>{history.medication}</td>
                <td>{history.notes}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default Histories;
