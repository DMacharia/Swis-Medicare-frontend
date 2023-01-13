import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

 const patientAPI = 'https://swis-medicare.onrender.com/api/v1/patients'

function PatientsProfile() {
    const [patient, setPatient] = useState([]);

    const {id} = useParams()
    

    useEffect(() => {
        fetch(`patientAPI/${id}`)
        .then(res => res.json())
        .then(data => setPatient(data))
    })
    return (
        <div className="patient-profile">
            <h1>Your Personal Data</h1>
        {patient.map((patient) => {
            return (
                <div className="patient-info">
                <p>Name: {patient.firstname} {patient.second_name}</p>
                <p>Username: {patient.username}</p>
                <p>Email: {patient.username}</p>
                <p>Phone Number: {patient.mobile_no}</p>
                <p>Age :{patient.age}</p>
                <p>Gender: {patient.gender}</p>
                <p>Address: {patient.address}</p>
                <p>Blood Group: {patient.blood_group}</p>
            </div>
            )
        })}
        </div>
    );
}

export default PatientsProfile;
