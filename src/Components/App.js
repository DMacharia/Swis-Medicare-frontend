import React, { useState, useEffect } from 'react';
import Patient from './Patient';
import Login from './Login';


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
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default (App);

       