import React from 'react'
import { Link } from 'react-router-dom';
import './doctor.css'

const doctorAPI = "https://swis-medicare-eblx.onrender.com/api/v1/doctors/";

const Doctor = ({ doctor, removeDoctor }) => {
  const { first_name, second_name, username, email, reg_no, mobile_no, emergency_no, address, speciality, role} = doctor;

  function onDeleteClick(e) {
    e.preventDefault();
    fetch(`${doctorAPI}${doctor.id}`, {
      method: "DELETE",
    });
    removeDoctor(doctor);
  }

  return (
    <div className='doctors_container' >
      <div className='app_doctors' style={{width: '89%', float: 'right',textAlign:'left', marginTop: '1rem'}}>
          <p style={{color: 'black'}}>Name: <span>{first_name} {second_name}</span></p>
          <p>Username: <span>{username}</span></p>
          <p>Email: <span>{email}</span></p>
          <p>Reg No: <span>{reg_no}</span></p>
          <p>Phone No: <span>{mobile_no}</span></p>
          <p>Emergency no: <span>{emergency_no}</span></p>
          <p>address: <span>{address}</span></p>
          <p>Speciality: <span>{speciality}</span></p>
          <div className='doctor_action'>
          <Link to={`/edit/${doctor.id}`}>Edit</Link>
            <button onClick={onDeleteClick} >
              Fire
            </button>
          </div>
      </div>
    </div>
  )
}

export default Doctor;
