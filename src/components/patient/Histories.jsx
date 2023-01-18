import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import "./histories.css";

function Histories() {
  const [patient, setPatient] = useState({});

  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [fake, setFake] = useState([]);
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      // alert("An error occured while fetching user data");
    }
  };

  const userID = user?.email;


  useEffect(() => {
    fetch("/api/v1/users")
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
