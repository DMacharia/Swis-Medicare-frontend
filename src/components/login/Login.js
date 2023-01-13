import React, {useState} from 'react'
import './././login.css';
function Login() {
    const [values, setValues] = useState({
      username: "",
      password: "",
    });
    const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://swis-medicare.onrender.com/api/v1/login", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.username,
        password: values.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.jwt) {
          localStorage.setItem("jwt", data.jwt);
        } else {
          console.log(data.errors);
        }
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });
    };
  return (
    <div className="login__form">
      <input
        className="login__inputs user__name"
        type="text"
        name="username"
        placeholder="Username"
        value={values.username}
        onChange={(e) => setValues({ ...values, username: e.target.value })}
      />
      <input
        className="login__inputs user__password"
        type="password"
        name="password"
        placeholder="Password"
        value={values.password}
        onChange={(e) => setValues({ ...values, password: e.target.value })}
      />
      <button className='login__btn' type="submit" onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
}
export default Login

