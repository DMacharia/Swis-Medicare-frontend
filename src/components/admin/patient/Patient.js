import React from 'react'
import { Link } from 'react-router-dom';

const patientAPI = "https://swis-medicare-eblx.onrender.com/patients/";


const Patient = ({ patient, removePaient }) => {
    const {first_name, second_name, username, email,mobile_no, gender, blood_group, address, password, date_of_birth, role } = patient;

    function onDeleteClick(e) {
        e.preventDefault();
        fetch(`${patientAPI}${patient.id}`, {
          method: "DELETE",
        });
        removePaient(patient);
      }

  return (
    <div className='patients_container'>
        <div className='app_patients'>
        <p style={{color: 'black'}}>Name: <span>{first_name} {second_name}</span></p>
          <p>Username: <span>{username}</span></p>
          <p>Email: <span>{email}</span></p>
          <p>Phone No: <span>{mobile_no}</span></p>
          <p>Emergency no: <span>{gender}</span></p>
          <p>address: <span>{address}</span></p>
          <p>Blood Group: <span>{blood_group}</span></p>
          <p>Date of Birth: <span>{date_of_birth}</span></p>
          <div className='doctor_action'>
          <Link to={`/edit/${patient.id}`}>Edit</Link>
            {/* <button onClick={onDeleteClick} >
              Fire
            </button> */}
          </div>
        </div>
    </div>
  )
}

export default Patient