import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = event => {
        event.preventDefault();
        // Do something with the username and password, like send them to a server
        // If the login is successful, navigate to the patient profile page
        history.push('/patient-profile');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={username} onChange={event => setUsername(event.target.value)} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
            </label>
            <br />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
          