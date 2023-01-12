import React from 'react';
import {Routes, Route} from "react-router-dom"
import Homepatient from './components/Homepatient'
import Login from './components/Login';
import PatientsProfile from './components/PatientsProfile';

function App() {
    return (
       <div>

         <Routes>
          <Route path='/' element={<Homepatient />} />
          <Route path="/patientsprofile" element={<PatientsProfile />}/> 
          <Route path="/login" element={<Login />} />  
        </Routes>
       </div>
    );
}

export default App;
