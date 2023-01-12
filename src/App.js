import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Sidebar from './components/Sidebar';
import DoctorCard from './components/doctor/DoctorCard';
import EditDoctor from './components/doctor/EditDoctor'
import NewPatientForm from './components/patient/NewPatientForm';
import PatientCard from './components/patient/PatientCard';

function App() {
  return (
    <div className="App">
      <Sidebar />
      {/* <NewPatientForm /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/doctors' element={<DoctorCard />} />
          <Route path='/patients' element={<PatientCard />} />
          <Route exact path='/edit/:id' element={<EditDoctor/>}/>
        </Routes>
    </div>
  );
}

export default App;
