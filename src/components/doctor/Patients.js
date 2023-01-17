import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './patients.css'

const patientsAPI = 'https://swis-medicare-eblx.onrender.com/api/v1/patients';

const Patients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch(patientsAPI)
    .then((response) => response.json())
    .then((data) => setPatients(data));
  })
  
  return (
    <div className='patients'>
      <h2>Patients List</h2>
      <div className='patients_header'>
        <div><p>Name</p></div>
        <div><p>Email</p></div>
        <div><p>Phone No:</p></div>
        <div><p>Gender</p></div>
        <div><p>Address</p></div>
        <div><p>Blood Group</p></div>
        <div><p>Date Of Birth</p></div>
        <div><p>Username</p></div>
      </div>
      <div className='patients_container'>
        {patients.map((item) => {
          return (
            <Link to='/:id'>
              <div className='patients_table'>
                <div><p>{item.first_name} <span>{item.second_name}</span></p></div>
                <div><p>{item.email}</p></div>
                <div><p>{item.mobile_no}</p></div>
                <div><p>{item.gender}</p></div>
                <div><p>{item.address}</p></div>
                <div><p>{item.blood_group}</p></div>
                <div><p>{item.date_of_birth}</p></div>
                <div><p>{item.username}</p></div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Patients