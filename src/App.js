
import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home/home";
import DoctorView from "./components/doctor/Patient";
import Doctor from "./components/doctor/doctor";
import Patient from "./components/patient/patient";
import Admin from "./components/admin/admin";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import DoctorSearch from "./components/doctor/doctorsearch";
import DoctorList from "./components/doctor/doctorlist";
import Header from "./components/header";
import Footer from "./components/aside";
import Home from './components-backup/Home'
import Sidebar from './components-backup/Sidebar';
import DoctorCard from './components-backup/doctor/DoctorCard';
import EditDoctor from './components-backup/doctor/EditDoctor'
import NewPatientForm from './components-backup/patient/NewPatientForm';
import PatientCard from './components-backup/patient/PatientCard';
import Homepatient from './components/Homepatient'
import Login from './components/Login';
import PatientsProfile from './components/PatientsProfile';


function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="doctor" element={<Doctor />}>
          <Route path="search" element={<DoctorSearch />} />
          <Route path="list" element={<DoctorList />} />
          <Route path=":id" element={<DoctorView />} />
        </Route>
        <Route path='/' element={<Homepatient />} />
          <Route path="/patientsprofile" element={<PatientsProfile />}/> 
          <Route path="/login" element={<Login />} />  
      </Routes>

      <Footer />
    </Router>
  )
}

export default App;
