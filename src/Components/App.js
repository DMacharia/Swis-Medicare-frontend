import React from 'react';
import { BrowserRouter as Router,  Route } from 'react-router-dom';
import Login from './Login';
import PatientsProfile from './PatientsProfile';

function App() {
    return (
        <Router>
            
                <Route path="/patient-profile">
                    <PatientsProfile />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            
        </Router>
    );
}

export default App;






  
       



  


       