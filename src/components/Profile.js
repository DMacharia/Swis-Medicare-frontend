import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Patient from "./admin/patient/Patient";

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [fake, setFake] = useState([]);
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      // alert("An error occured while fetching user data");
    }
  };

  const userID = user?.email;



  useEffect(() => {
    fetch("https://swis-medicare-asgm.onrender.com/api/v1/users")
      .then((res) => res.json())
      .then((data) => {
        const userEmail = userID;
        const userProfile = data.filter((user) => user.email === userEmail)[0];
        setFake(userProfile);
      });
  });

  fetchUserName();

  // console.log(fake)

  const [patientFormVisible, setPatientFormVisible] = useState(false);
  return (
    <div style={{
      paddingTop: '25rem'
    }}>

      <p>Hello {fake?.username}</p>

      <div className="doctor_profile">
        <h2>{fake?.role}</h2>
      </div>
      {fake?.role === "Admin" && (
        <>
          <div style={{fontWeight: 'bold', fontSize: '27px'}}>Username: {fake?.username}</div>
          <div style={{fontWeight: 'bold', fontSize: '27px'}}>Name: {fake?.first_name} {fake?.second_name}</div>
          <div style={{fontWeight: 'bold', fontSize: '27px'}}>Email: {fake?.email}</div>
          <div style={{fontWeight: 'bold', fontSize: '27px'}}>Mobile No:{fake?.mobile_no}</div>
          <div style={{fontWeight: 'bold', fontSize: '27px'}}>Address: {fake?.address}</div>
          <div style={{fontWeight: 'bold', fontSize: '27px'}}>Title: {fake?.title}</div>
        </>
      )}
      {fake?.role === "Doctor" ? (
        <div style={{
          paddingLeft: '3rem'
        }}>
          <div>Username: {fake?.username}</div>
          <div>
            Name: {fake?.first_name} {fake?.second_name}
          </div>
          <div>Email: {fake?.email}</div>
          <div>Mobile: {fake?.mobile_no}</div>
          <div>Reg no:{fake?.reg_no}</div>
          <div>Emergency no:{fake?.emergency_no}</div>
          <div>Address: {fake?.address}</div>
          <div>Speciality: {fake?.speciality}</div>
          <Patient />
        </div>
      ) : (
        <div>
          <div>Username: {fake?.username}</div>
          <div>
            Name: {fake?.first_name} {fake?.second_name}
          </div>
          <div style={{fontWeight: 'bold', fontSize: '27px'}}>Email: {fake?.email}</div>
          <div style={{fontWeight: 'bold', fontSize: '27px'}}>Gender: {fake?.gender}</div>
          <div style={{fontWeight: 'bold', fontSize: '27px'}}>Mobile No:{fake?.mobile_no}</div>
          <div style={{fontWeight: 'bold', fontSize: '27px'}}>Address: {fake?.address}</div>
          <div style={{fontWeight: 'bold', fontSize: '27px'}}>Blood Group:{fake?.blood_group}</div>
          <div style={{fontWeight: 'bold', fontSize: '27px'}}>Date of Birth: {fake?.date_of_birth}</div>
          <div>
            {fake?.patient_histories &&
              fake?.patient_histories.map((history) => (
                <div key={history.id}>
                  <h1>Medical History</h1>
                  <p>Weight: <span style={{color: '#0071bd'}}>{history?.weight}</span></p>
                  <p>Bood Pressure: <span style={{color: '#0071bd'}}>{history?.blood_pressure}</span></p>
                  <p>Blood Sugar: <span style={{color: '#0071bd'}}>{history?.blood_sugar}</span></p>
                  <p>Temperature: <span style={{color: '#0071bd'}}>{history?.temperature}</span></p>
                  <p>Pulse Rate: <span style={{color: '#0071bd'}}>{history?.pulse_rate}</span></p>
                  <p>Test: <span style={{color: '#0071bd'}}>{history?.test}</span></p>
                  <p>Diagnosis: <span style={{color: '#0071bd'}}>{history?.diagnosis}</span></p>
                  <p>Medication: <span style={{color: '#0071bd'}}>{history?.medication}</span></p>
                  <p>Note: <span style={{color: '#0071bd'}}>{history?.notes}</span></p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
