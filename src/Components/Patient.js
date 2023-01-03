import React, { useState } from 'react';

function Patient() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // add code to submit the form here
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" value={age} onChange={(event) => setAge(event.target.value)} />
      </label>
      <br />
      <label>
        Mobile Number:
        <input type="text" value={mobileNumber} onChange={(event) => setMobileNumber(event.target.value)} />
      </label>
      <br />
      <label>
        Gender:
        <input type="radio" value="male" checked={gender === 'male'} onChange={(event) => setGender(event.target.value)} /> Male
        <input type="radio" value="female" checked={gender === 'female'} onChange={(event) => setGender(event.target.value)} /> Female
      </label>
      <br />
      <label>
        Address:
        <textarea value={address} onChange={(event) => setAddress(event.target.value)} />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Patient;
