import React from 'react';
import Login from './login';
import Patient from './patient';
import Signup from './signup';

function login(username, password) {
  if (username === 'patient' && password === 'password') {
    return true;
  }
  return false;
}
  
export default (App);

       