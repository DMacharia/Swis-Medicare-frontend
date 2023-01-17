import React, { useEffect, useState } from 'react'
import DoctorContainer from './DoctorContainer';
import NewDoctorForm from './NewDoctorForm';
import './doctor.css'

const doctorAPI = "https://swis-medicare-eblx.onrender.com/api/v1/doctors";

const DoctorCard = () => {
  const [doctors, setDoctors] = useState([]);
  const [formVisible, setFormVisible] = useState(false);

  
  useEffect(() => {
    fetch(doctorAPI)
      .then(res => res.json())
      .then(data => setDoctors(data))
  }, []);


  function addDoctor(newDoctor) {
    setDoctors([...doctors, newDoctor]);
  }

  function removeDoctor(doctorToRemove) {
    setDoctors(doctors.filter(doctor => doctor.id !== doctorToRemove.id))
  }

  function renderDoctorView() {
    return (
      <DoctorContainer
        doctors={doctors}
        removeDoctor={removeDoctor}
      />
    )
  }

  return (
    <div className='actions_container' style={{width: '89%', float: 'right', marginTop: '10rem'}}>
      <h1 style={{color: '#001529', fontStyle: 'italic', paddingTop: '2rem'}}>Welcome to SwissMedicare!</h1>
     <h2>{doctors.length} Doctors on Board</h2>
      {renderDoctorView()}
      <div className='buttons'>
        <button
          onClick={() => setFormVisible(!formVisible)} >
          {formVisible ? 'Hide This Form' : 'Add New Doctor'}
        </button>
        {formVisible ? <NewDoctorForm addDoctor={addDoctor} /> : null}
      </div>
      
    </div>
  )
}

export default DoctorCard