import React, { useEffect, useState } from 'react'
import NewPatientForm from './NewPatientForm';
import PatientContainer from './PatientContainer';
import './patient.css'
const patientAPI = "https://swis-medicare-eblx.onrender.com/api/v1/patients";

const PatientCard = () => {
    const [patients, setPatients] = useState([]);
    const [patientFormVisible, setPatientFormVisible] = useState(false);

    useEffect(() => {
        fetch(patientAPI)
        .then(res => res.json())
        .then(data => setPatients(data))
    }, [])

    function addPatient(newPatient) {
        setPatients([...patients, newPatient]);
    } 

    function removePatient(patientToRemove) {
        setPatients(patients.filter(patient => patient.id!== patientToRemove.id))
    }

    function renderPatientView() {
        return (
            <PatientContainer
                patients={patients}
                patientToRemove={removePatient}
             />
        )
    }
  return (
    <div className='actions_container' style={{width: '89%', float: 'right', marginTop: '10rem'}}>
        <h1 style={{color: '#001529', fontStyle: 'italic', paddingTop: '2rem'}}>Welcome to SwissMedicare!</h1>
        <h2>{patients.length} Patients Admitted</h2>
        {renderPatientView()}
        <div className='buttons'>
            <button
                onClick={() => setPatientFormVisible(!patientFormVisible)} >
                {patientFormVisible ? 'Hide This Form' : 'Admit Patient'}
            </button>
            {patientFormVisible ? <NewPatientForm addPatient={addPatient} /> : null}
        </div>
    </div>
  )
}

export default PatientCard