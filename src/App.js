import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home/home";
import DoctorView from "./components/doctor/Patient";
import Doctor from "./components/doctor/doctor";
import Patient from "./components/patient/patient";
import Admin from "./components/admin/admin";
import Login from "./components/login/Login";
import Signup from "./components/signup/signup";
import DoctorSearch from "./components/doctor/doctorsearch";
import DoctorList from "./components/doctor/doctorlist";
import Header from "./components/header";
import Footer from "./components/aside";
import Adminhome from "./components/Adminhome";
import Sidebar from "./components/Sidebar";
import DoctorCard from "./components/adminDoctor/DoctorCard";
import EditDoctor from "./components/adminDoctor/EditDoctor";
import NewPatientForm from "./components/adminPatient/NewPatientForm";
import PatientCard from "./components/adminPatient/PatientCard";
import Homepatient from "./components/Homepatient";
import PatientsProfile from "./components/PatientsProfile";
import Remember from "./components/login/remember"
// import { useEffect } from "react";

function App() {
  const [storedToken, setStoredToken] = useState(localStorage.getItem("token"));
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    fetch("https://https://swis-medicare-eblx.onrender.com/api/v1/profile", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      {storedToken ? (
        <Routes>
          {role === "admin" && <Adminhome />}
          {role === "patient" ? <Homepatient /> : <DoctorList />}

          <Route
            path="/"
            element={
              <Home
                name={name}
                storedToken={storedToken}
                setStoredToken={setStoredToken}
              />
            }
          />

          {role === "admin" ? (
            <Route path="/admin" element={<Admin />} />
          ) : null}
        </Routes>
      ) : (
        <>
          <Header />
          <Routes>
          </Routes>
        </>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/remember" element={<Remember />} />
        <Route path="doctor" element={<Doctor />}>
          <Route path="search" element={<DoctorSearch />} />
          <Route path="list" element={<DoctorList />} />
          <Route path=":id" element={<DoctorView />} />
        </Route>

        <Route path="/" element={<Homepatient />} />
        <Route path="/patientsprofile" element={<PatientsProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminhome" element={<Adminhome />} />
        <Route path="/doctors" element={<DoctorCard />} />
        <Route path="/patients" element={<PatientCard />} />
        <Route exact path="/edit/:id" element={<EditDoctor />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
