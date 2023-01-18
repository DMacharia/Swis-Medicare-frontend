import React from 'react'

const NewDoctorForm = () => {

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   fetch("/patients", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       first_name,
  //       second_name,
  //       username,
  //       email,
  //       address,
  //       mobile_no,
  //       gender,
  //       password,
  //       date_of_birth,
  //       role,
  //     }),
  //   })
  //     .then((r) => r.json())
  //     .then((newPatient) => addPatient(newPatient));

  //   setFirstName("");
  //   setSecondName("");
  //   setUsername("");
  //   setEmail("");
  //   setAddress("");
  //   setMobile("");
  //   setGender("");
  //   setPassword("");
  //   setDate("");
  //   setRole("");
  // }
  // navigate('/register');


  return (
    <div>
        {/* <form onSubmit={handleSubmit}>
        <h1>Admit patient</h1>
          <section className="text-input">
            <label>
              First Name
            </label>
            <input 
                type="text" 
                placeholder="First Name here ..."
                name='first_name'
                value={first_name}
                onChange={onFormChange} />
          </section>
          <section className="text-input">
            <label>
              Second Name
            </label>
            <input 
                type="text" 
                placeholder="Second Name here ..."
                name='second_name' 
                value={second_name}
                onChange={onFormChange} />
          </section>
          <section className="text-input">
            <label>
              Username
            </label>
            <input 
                type="text" 
                placeholder="Username here ..."
                name='username'
                value={username}
                onChange={onFormChange} />
          </section>
          <section className="text-input">
            <label>
              Email Address
            </label>
            <input 
                type="text" 
                placeholder="Email Address here ..."
                name='email'
                value={email}
                onChange={onFormChange} />
          </section>
          <section className="text-input">
            <label>
              Phone number
            </label>
            <input 
                type="text" 
                placeholder="Phone number here ..."
                name='mobile_no'
                value={mobile_no}
                onChange={onFormChange} />
          </section>
          <section className="text-input">
            <label>
              Gender
            </label>
            <input 
                type="text" 
                placeholder="Gender here ..."
                name='gender'
                value={reg_no}
                onChange={onFormChange} />
          </section>
          <section className="text-input">
            <label>
              Blood Group
            </label>
            <input 
                type="text" 
                placeholder="Blood group here ..."
                name='blood group'
                value={emergency_no}
                onChange={onFormChange} />
          </section>
          <section className="text-input">
            <label>
              Address
            </label>
            <input 
                type="text" 
                placeholder="Address here ..."
                name='address'
                value={address}
                onChange={onFormChange} />
          </section>
          <section className="text-input">
            <label>
              Password
            </label>
            <input 
                type="text" 
                placeholder="Password here ..."
                name='password'
                value={password}
                onChange={onFormChange} />
          </section>
          <section className="text-input">
            <label>
              Date of Birth
            </label>
            <input 
                type="text" 
                placeholder="Date of Birth here ..."
                name='date_of_birth'
                value={speciality}
                onChange={onFormChange} />
          </section>
          <section className="text-input">
            <label>
              Role
            </label>
            <input 
                type="text" 
                placeholder="Role here ..."
                name='role'
                value={role}
                onChange={onFormChange} />
          </section>
          <section className="actions">
            <button type='submit'>admit</button>
          </section>
        </form> */}
    </div>
  )
}

export default NewDoctorForm