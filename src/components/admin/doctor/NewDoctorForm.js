import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const NewDoctorForm = ({addPatient}) => {

  const [first_name, setFirstName] = useState("");
  const [second_name, setSecondName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [reg_no, setReg] = useState("");
  const [address, setAddress] = useState("");
  const [mobile_no, setMobile] = useState("");
  const [emergency_no, setEmergency] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  

  const navigate = useNavigate()

  const  handleSubmit = (e) => {
    e.preventDefault();
    fetch("/patients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name,
        second_name,
        username,
        email,
        reg_no,
        mobile_no,
        emergency_no,
        address,
        speciality,
        password,
        role,
      }),
    })
      .then((r) => r.json())
      .then((newPatient) => addPatient(newPatient));

    setFirstName("");
    setSecondName("");
    setUsername("");
    setEmail("");
    setAddress("");
    setMobile("");
    setReg("")
    setEmergency("");
    setPassword("");
    setSpeciality("");
    setRole("");
  }
  navigate('/register');


  return (
    <div>
        <form>
        <h1>Employ Doctor</h1>
          <section className="text-input">
            <label>
              First Name
            </label>
            <input 
                // type="text" 
                placeholder="First Name here ..."
                // name='first_name'
                // value={first_name}
                // onChange={(e) => setFirstName(e.target.value)}
                 />
          </section>
          <section className="text-input">
            <label>
              Second Name
            </label>
            <input 
                // type="text" 
                placeholder="Second Name here ..."
                // name='second_name' 
                // value={second_name}
                // onChange={(e) => setSecondName(e.target.value)}
                 />
          </section>
          <section className="text-input">
            <label>
              Username
            </label>
            <input 
                // type="text" 
                placeholder="Username here ..."
                // name='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
          </section>
          <section className="text-input">
            <label>
              Email Address
            </label>
            <input 
                // type="text" 
                placeholder="Email Address here ..."
                // name='email'
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                 />
          </section>
          <section className="text-input">
            <label>
              Phone number
            </label>
            <input 
                // type="text" 
                placeholder="Phone number here ..."
                // name='mobile_no'
                // value={reg_no}
                // onChange={(e) => setMobile(e.target.value)}
                 />
          </section>
          <section className="text-input">
            <label>
              Emergency no
            </label>
            <input 
                type="text" 
                placeholder="Blood group here ..."
                // name='emergency_no'
                // value={emergency_no}
                // onChange={(e) => setEmergency(e.target.value)}
                 />
          </section>
          <section className="text-input">
            <label>
              Address
            </label>
            <input 
                // type="text" 
                placeholder="Address here ..."
                // name='address'
                // value={address}
                // onChange={(e) => setAddress(e.target.value)}
                 />
          </section>
          <section className="text-input">
            <label>
              Password
            </label>
            <input 
                // type="text" 
                placeholder="Password here ..."
                // name='password'
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                 />
          </section>
          <section className="text-input">
            <label>
              Speciality
            </label>
            <input 
                // type="text" 
                placeholder="Speciality here ..."
                // name='speciality'
                // value={speciality}
                // onChange={(e) => setSpeciality(e.target.value)}
                 />
          </section>
          <section className="text-input">
            <label>
              Role
            </label>
            <input 
                // type="text" 
                placeholder="Role here ..."
                // name='role'
                // value={role}
                // onChange={(e) => setRole(e.target.value)}
                 />
          </section>
          <section className="actions">
            <button onClick={handleSubmit} type='submit'>Employ</button>
          </section>
        </form>
    </div>
  )
}

export default NewDoctorForm