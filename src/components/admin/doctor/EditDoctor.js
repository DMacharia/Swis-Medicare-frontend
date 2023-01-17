import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const doctorAPI = "https://swis-medicare.onrender.com/api/v1/doctors";

const EditDoctor = () => {

  const [doctorData, setDoctorData] = useState([]);
  let { id } = useParams();
  let doctor_url =  `https://swis-medicare.onrender.com/doctors/${id}`;

  // useEffect(() => {
  //   fetch(doctor_url)
  //    .then(response => response.json())
  //    .then(data => setDoctorData(data))
  // }, [])

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://swis-medicare-eblx.onrender.com/api/v1/doctors/${id}`, {
      methhod: "PATCH",
      headers: {
        'content-type': 'application/json',
        "Access-Control-Allow-Origin" : "*"
      },
      body: JSON.stringify({
        first_name: doctorData.first_name,
        second_name: doctorData.second_name,
        username: doctorData.username,
        email: doctorData.email,
        reg_no: doctorData.reg_no,
        mobile_no: doctorData.mobile_no,
        emergency_no: doctorData.emergency_no,
        address: doctorData.address,
        speciality: doctorData.speciality,
        role: doctorData.role
      })
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    navigate("/doctors");
  };

  const onFormChange = (e) => {
    setDoctorData({...doctorData, [e.target.name]: e.target.value});
  }


  return (
    <div>
        <form onSubmit={handleSubmit}>
          <h1>Edit Doctor</h1>
          <section className="text-input">
            <label>
              First Name
            </label>
            <input 
              type="text" 
              placeholder="First Name here ..."
              name="first_name"
              value={doctorData.first_name}
              onChange={onFormChange}  
            />
          </section>
          <section className="text-input">
            <label>
              Second Name
            </label>
            <input 
              type="text" 
              placeholder="Input Second Name here ..."
              name="second_name"
              value={doctorData.second_name}
              onChange={onFormChange} />
          </section>
          {/* <section className="text-input">
            <label>
              Image URL
            </label>
            <input type="text" placeholder="Image URL here ..." />
          </section> */}
          <section className="text-input">
            <label>
              Email Address
            </label>
            <input 
              type="text" 
              placeholder="Email Address here ..."
              name="email"
              value={doctorData.email}
              onChange={onFormChange} />
          </section>
          <section className="text-input">
            <label>
              Phone number
            </label>
            <input 
              type="number" 
              placeholder="Phone number here ..."
              name="mobile_no"
              value={doctorData.mobile_no}
              onChange={onFormChange} />
          </section>
          <section className="text-input">
            <label>
              ID Number
            </label>
            <input 
              type="number" 
              placeholder="ID Number here ..."
              name="reg_no"
              value={doctorData.reg_no}
              onChange={onFormChange} />
          </section>
          <section className="text-input">
            <label>
              Emergency Number
            </label>
            <input 
              type="number" 
              placeholder="Emergency Number here ..."
              name="emergency_no"
              value={doctorData.emergency_no}
              onChange={onFormChange} />
          </section>
          <section className="text-input">
            <label>
              Address
            </label>
            <input 
              type="text" 
              placeholder="Address Number here ..."
              name="address"
              value={doctorData.address}
              onChange={onFormChange} />
          </section>
          <section className="text-input">
            <label>
              ID Number
            </label>
            <input 
              type="text" 
              placeholder="Speciality here ..."
              name="speciality"
              value={doctorData.speciality}
              onChange={onFormChange} />
          </section>
          <section className="text-input">
            <label>
              Role
            </label>
            <input 
              type="text" 
              placeholder="Role here ..."
              name="role"
              value={doctorData.role}
              onChange={onFormChange} />
          </section>
          <section className="actions">
            <button value="Updtate" type='submit'>Update</button>
          </section>
        </form>
    </div>
  )
}

export default EditDoctor