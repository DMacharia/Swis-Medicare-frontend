import React, { useState } from 'react';

function PatientForm() {
  // Use the useState hook to create state variables for each form field
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // You can access the form values here using the state variables
    const formData = {
      firstName,
      lastName,
      username,
      email,
      age,
      mobileNumber,
      gender,
      address,
    };

    // Perform the desired action with the form data (e.g. send to a server)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <br />
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <br />
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <br />
      <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />
      <br />
      <label htmlFor="mobileNumber">Mobile Number:</label>
      <input
        type="tel"
        id="mobileNumber"
        value={mobileNumber}
        onChange={(event) => setMobileNumber(event.target.value)}
      />
      <br />
      <label htmlFor="gender">Gender:</label>
      <input
        type="text"
        id="gender"
        value={gender}
        onChange={(event)}
        
        
        
  )}
        
  export default Patient;
