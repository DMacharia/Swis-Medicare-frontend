import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

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
    <div>
      <p>{userID}</p>

      <p>Hello {fake?.username}</p>

      <div className="doctor_profile">
        <h2>{fake?.role}</h2>
      </div>
      {fake?.role === "Admin" && (
        <>
          <div>Username: {fake?.username}</div>
          <div>
            Name: {fake?.first_name} {fake?.second_name}
          </div>
          <div>Email: {fake?.email}</div>
          <div>Mobile No:{fake?.mobile_no}</div>
          <div>Address: {fake?.address}</div>
          <div>Title: {fake?.title}</div>
        </>
      )}
      {fake?.role === "Doctor" ? (
        <>
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
        </>
      ) : (
        <>
          <div>Username: {fake?.username}</div>
          <div>
            Name: {fake?.first_name} {fake?.second_name}
          </div>
          <div>Email: {fake?.email}</div>
          <div>Gender: {fake?.gender}</div>
          <div>Mobile No:{fake?.mobile_no}</div>
          <div>Address: {fake?.address}</div>
          <div>Blood Group:{fake?.blood_group}</div>
          <div>Date of Birth: {fake?.date_of_birth}</div>
          <div>
            {fake?.patient_histories &&
              fake?.patient_histories.map((history) => (
                <div key={history.id}>
                  <p>Weight: <span>{history?.weight}</span></p>
                  <p>Bood Pressure: {history?.blood_pressure}</p>
                  <p>Blood Sugar: {history?.blood_sugar}</p>
                  <p>Temperature: {history?.temperature}</p>
                  <p>Pulse Rate: {history?.pulse_rate}</p>
                  <p>Test: {history?.test}</p>
                  <p>Diagnosis{history?.diagnosis}</p>
                  <p>Medication: {history?.medication}</p>
                  <p>Note: {history?.notes}</p>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
