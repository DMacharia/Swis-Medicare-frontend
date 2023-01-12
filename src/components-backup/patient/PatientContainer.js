import React from 'react'
import Patient from './Patient'

const PatientContainer = ({ patients, removePatient }) => {
  return (
    <div className='patient_container'>
    {patients?.map(patient => {
        return (
            <Patient
                key={patient.id}
                patient={patient}
                removePatient={removePatient} 
            />
        )
    })}
</div>
  )
}

export default PatientContainer