import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import CreatePatient from './CreatePatient';
import { auth, db } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

const MyProfile = () => {

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

//   useEffect(() => {
//     fetch("https://swis-medicare-eblx.onrender.com/api/v1/users")
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data);
//             const userEmail = "bob@example.com"
//             const userProfile = data.filter(patient => patient.email === userEmail)[0];
//             setProfile(userProfile);
//         });
// }, []);

  useEffect(() => {
    fetch("https://swis-medicare-eblx.onrender.com/api/v1/users")
    .then(res => res.json())
    .then(data => {
      const userEmail = userID
      const userProfile = data.filter(user => user.email === userEmail)[0];
      setFake(userProfile);
    })
  })

  fetchUserName();

  // console.log(fake)

  


  const [patientFormVisible, setPatientFormVisible] = useState(false);
  return (
    <div>
      
      <p>{userID}</p>


      <p>Hello {fake?.username}</p>

     

      <div className='doctor_profile'>
        <h2>{fake.role}</h2>
      </div>

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