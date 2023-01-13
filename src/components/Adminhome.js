import React from 'react'
import NewDoctorForm from './adminDoctor/NewDoctorForm'
import NewPatientForm from './adminPatient/NewPatientForm'

const Home = () => {
  return (
    <div className='home'>
      <div className='headers'>
        <h2 style={{
          fontSize: 33,
          paddingBottom: '10px',
          color: '#001529',
          fontStyle: 'italic',
          fontWeight: 'bold'
        }}>Welcome to SwissMedicare!</h2>
        <h1>General Stats</h1>
        <div className='app_stats'>
          <div className='stats'>
            <span>5</span>
            <p>Doctors on board</p>
          </div>
          <div className='stats'>
            <span>50</span>
            <p>Patients Admitted!</p>
          </div>
          <div className='stats'>
            <span>500</span>
            <p>Medicines in Stock</p>
          </div>
        </div>
      </div>
    <div className='forms'>
      <NewDoctorForm />
      <NewPatientForm />
    </div>
  </div>
  )
}

export default Home