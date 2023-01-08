import React from 'react';
import {useState} from 'react';
import { Navigate } from 'react-router';
import {Route} from 'react-router-dom'
import Login from './login';
import Patient from './patient';




function App() {
  // State for storing the patient's login information
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  // State for storing the patient's authenticated status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function for handling form submission
  const handleSubmit = event => {
    event.preventDefault();

    // Do something with the login data (e.g. send a request to the server to verify the login information)
    // For the purposes of this example, we will just pretend that the login was successful
    setIsAuthenticated(true);
  };

  // Function for handling input changes
  const handleChange = event => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value
    });
  };

  // If the patient is authenticated, redirect to the dashboard
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <Router>
      <Route path="/">
        <div>
          <h1>Patient Login</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={loginData.username}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
              />
            </label>
            <br />
            <button type="submit">Log In</button>
          </form>
        </div>
      </Route>
      {/* Other routes for the app go here */}
    </Router>
  );
}



  
export default (App);

       