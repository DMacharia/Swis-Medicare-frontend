import React, { useState, useEffect } from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";

import './register.css';

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const register = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password);
      };

      useEffect(() => {
        if (loading) return;
        if (user) navigate("/");
      }, [user, loading]);

  return (
    <div className="register">
        <div className="register__container">
            <h1 style={{color: 'red', paddingBottom: 20, fontStyle: 'italic'}}>Swiss-Medicare</h1>
            <h3>Register This User</h3>
            <p>Key in the exact same values you entered above</p>
            <input
                type="text"
                className="register__textBox"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="First Name"
            />
            <input
                type="text"
                className="register__textBox"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail Address"
            />
            <input
                type="password"
                className="register__textBox"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button className="register__btn" onClick={register}>
                Register
            </button>
        </div>
    </div>
  )
}

export default Register