import React from 'react';
import Appointment from './Appointment';
import Patient from './Patient';
import { Route, Router } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
 

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          
          <Router>
          <Route exact path="/login" component={Login} />
            <Route exact path="/patient" component={Patient} />
            </Router>
            </div>
      </BrowserRouter>
    );
  }
}


export default (App);





  
       



  


       