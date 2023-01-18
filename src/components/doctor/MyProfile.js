import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import CreatePatient from './CreatePatient';
import { auth, db } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

const MyProfile = () => {

  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
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

  fetchUserName();

  const userID = user?.email;


  const [patientFormVisible, setPatientFormVisible] = useState(false);
  return (
    <div>
      
      <p>{userID}</p>

      <div className='buttons'>
              <button
                  onClick={() => setPatientFormVisible(!patientFormVisible)} >
                  {patientFormVisible ? 'Hide This Form' : 'Admit Patient'}
              </button>
              {patientFormVisible ? <CreatePatient /> : null}
          </div>
      </div>
  )
}

export default MyProfile