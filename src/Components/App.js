import React, { useState, useEffect } from 'react';
import Login from './login';
import Patient from './patient';


function App() {
  const [, setUser] = useState(null);


  useEffect(() => {
    // auto-login
    fetch('/').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  
  return (
    <div>
      <p>Patient {} Form</p>
      <button onClick={() => 5(5 + 1)}>
       Login
      </button>
    </div>
  );
}

export default (App);

       