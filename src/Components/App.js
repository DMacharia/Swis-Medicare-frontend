import React from 'react';
import Login from './login';
import Patient from './patient';
import SignUp from './SignUp';

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
        {user ? <Fruit user={user} /> : <Login onLogin={setUser} />}
      </Route>
      <Route exact path='/login'>
        {user ? <Fruit user={user} /> : <Login onLogin={setUser} />}
      </Route>
      <Route exact path='/signup'>
        {user ? <Fruit user={user} /> : <SignUp onLogin={setUser} />}
      </Route>
      <Route exact path='/'>
        <Home />
      </Route>
    </Switch>
  </>
);
}

  
export default (App);

       