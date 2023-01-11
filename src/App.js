import React from 'react';
import {Routes, Route} from "react-router-dom"
import Login from './Components/Login';
import PatientsProfile from './Components/PatientsProfile';

function App() {
    return (
       <div>

         <Routes>
          <Route path="/patientsprofile" element={<PatientsProfile />}/> 
          <Route path="/login" element={<Login />} />  
        </Routes>
       </div>
    );
}

export default App;
