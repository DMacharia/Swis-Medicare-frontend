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

function App() {

	return (
		<Router>
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/patient" element={<Patient />} />
				<Route path="/admin" element={<Admin />} />
				{/* <Route path="/login" element={<Login />} /> */}
				<Route path="/signup" element={<Signup />} />
				<Route path="doctor" element={<Doctor />}>
					<Route path="search" element={<DoctorSearch />} />
					<Route path="list" element={<DoctorList />} />
					<Route path=":id" element={<DoctorView />} />
				</Route>

				<Route path="/" element={<Homepatient />} />
				<Route path="/patientsprofile" element={<PatientsProfile />} />
				<Route path="/login" element={<Login />} />

                <Sidebar />
            <NewPatientForm />
			<Route path="/adminhome" element={<Adminhome />} />
			<Route path="/doctors" element={<DoctorCard />} />
			<Route path="/patients" element={<PatientCard />} />
			<Route exact path="/edit/:id" element={<EditDoctor />} />
			</Routes>
            
			<Footer />
		</Router>
	);
}

export default App;
