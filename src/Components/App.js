import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Patient from './Patient';
import Login from './Login';
import PatientHistory from './PatientHistory';

function App() {
  const [user, setUser] = useState(null);


  useEffect(() => {
    // auto-login
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  
  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <Switch>
        <Route exact path='/me'>
          {user ? <Patient user={user} /> : <Login onLogin={setUser} />}
        </Route>
        <Route exact path='/login'>
          {user ? <Patient user={user} /> : <Login onLogin={setUser} />}
        </Route>
        <Route exact path='/'>
        </Route>
      </Switch>
    </>
  );
}

export default (App);

       