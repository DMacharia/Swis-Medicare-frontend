
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components-backup/Home'
import Sidebar from './components-backup/Sidebar';
import DoctorCard from './components-backup/doctor/DoctorCard';
import EditDoctor from './components-backup/doctor/EditDoctor'
import NewPatientForm from './components-backup/patient/NewPatientForm';
import PatientCard from './components-backup/patient/PatientCard';
import React from 'react';
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
