import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components-backup/Home'
import Sidebar from './components-backup/Sidebar';
import DoctorCard from './components-backup/doctor/DoctorCard';
import EditDoctor from './components-backup/doctor/EditDoctor'
import NewPatientForm from './components-backup/patient/NewPatientForm';
import PatientCard from './components-backup/patient/PatientCard';

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
