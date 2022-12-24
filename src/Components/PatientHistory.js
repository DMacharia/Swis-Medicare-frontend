import React, { useState } from 'react';

function PatientHistoryForm() {
  const [formData, setFormData] = useState({
    weight: '',
    bloodPressure: '',
    bloodSugar: '',
    bodyTemperature: '',
    pulseRate: '',
    diagnosis: '',
    medication: '',
    tests: '',
    procedures: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // submit formData to backend or do something else with it
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="weight">Weight:</label>
      <input
        type="text"
        name="weight"
        id="weight"
        value={formData.weight}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="bloodPressure">Blood Pressure:</label>
      <input
        type="text"
        name="bloodPressure"
        id="bloodPressure"
        value={formData.bloodPressure}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="bloodSugar">Blood Sugar:</label>
      <input
        type="text"
        name="bloodSugar"
        id="bloodSugar"
        value={formData.bloodSugar}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="bodyTemperature">Body Temperature:</label>
      <input
        type="text"
        name="bodyTemperature"
        id="bodyTemperature"
        value={formData.bodyTemperature}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="pulseRate">Pulse Rate:</label>
      <input
        type="text"
        name="pulseRate"
        id="pulseRate"
        value={formData.pulseRate}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="diagnosis">Diagnosis:</label>
      <input
        type="text"
        name="diagnosis"
        id="diagnosis"
        value={formData.diagnosis}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="medication">Medication:</label>
      <input
        type="text"
        name="medication"
        id="medication"
        value={formData.medication}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="tests">Tests:</label>
      <input
        type="text"
        name="tests"
        id="tests"
        value={formData.tests}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="proced

export default PatientHistory;