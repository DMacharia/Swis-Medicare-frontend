import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Sidebar from './components/Sidebar';
import DoctorCard from './components/doctor/DoctorCard';
import EditDoctor from './components/doctor/EditDoctor'

function App() {
  return (
    <div className="App">
      <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/doctors' element={<DoctorCard />} />
          <Route exact path='/edit/:id' element={<EditDoctor/>}/>
        </Routes>
    </div>
  );
}

export default App;
