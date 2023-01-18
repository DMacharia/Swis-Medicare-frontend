import React, { useState , useEffect} from "react";
import Profile from "../Profile";
import "./profile.css";

function PatientProfile() {
  const [patient, setPatient] = useState({});
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/api/v1/patient/8")
      .then((response) => response.json())
      .then((data) => setPatient(data));
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className="dashboard">
      <div className="profile">
        <h2>Your Profile</h2>
        <Profile />
        {/* <div className="profile-info">
          <img
            src={imageUrl ? imageUrl : patient.photo_url}
            alt="Patient"
            className="patient-photo"
          />
          <input type="file" onChange={handleImageChange} />
          <p>
            Name: {patient.first_name} {patient.second_name}
          </p>
          <p>Email: {patient.email}</p>
          <p>Mobile No: {patient.mobile_no}</p>
          <p>Gender: {patient.gender}</p>
          <p>Address: {patient.address}</p>
          <p>Blood Group: {patient.blood_group}</p>
          <p>Date of Birth: {patient.date_of_birth}</p>
          <p>Allergies: {patient.allergies}</p>
          <p>Emergency Contact: {patient.emergency_contact}</p>
        </div> */}
        <button className="edit-button">Edit Profile</button>
      </div>
    </div>
  );
}
export default PatientProfile;
