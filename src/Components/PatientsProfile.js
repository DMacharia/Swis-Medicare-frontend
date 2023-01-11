import React, { useState, useEffect } from 'react';

// patientAPI = 'https://swis-medicare.onrender.com/api/v1/patients/12'

function PatientsProfile() {
    const [patient, setPatient] = useState([]);
    

    useEffect(() => {
        fetch('https://swis-medicare.onrender.com/api/v1/patients/12')
        .then(res => res.json())
        .then(data => console.log(data))
    })
    return (
        <div className="patient-profile">
            <h1>Your Personal Data</h1>
            <div className="patient-info">
                <p>Name: </p>
                <p>Age: </p>
                <p>Gender: </p>
                <p>Condition: </p>
            </div>
        </div>
    );
}

export default PatientsProfile;
