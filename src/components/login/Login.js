
import "./login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Auth from "../images/login.jpg";

export default function Login() {
  let navigate = useNavigate();
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://swis-medicare-eblx.onrender.com/api/v1/login", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: name,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.jwt) {
          localStorage.setItem("jwt", data.jwt);
          const role = data.user.role;
          if (role === "Admin") {
            navigate("/Adminhome");
          } else if (role === "Doctor") {
            navigate("/doctor");
          } else if (role === "Patient") {
            navigate("/patient");
          }
        } else {
          console.log(data.errors);
        }
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main className="auth-container">
      <div className="auth-image">
        <img src={Auth} alt="authentication" />
      </div>
      <form className="authentication" onSubmit={handleSubmit}>
        <h3>Welcome Back</h3>
        <input
          type="text"
          placeholder="Username"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link to="/remember" className="form-links">
          Forgot Password
        </Link>
        <button type="submit" className="submit-button">
          Submit
        </button>
        <Link to="/signup" className="form-links">
          No account join us?
        </Link>
      </form>
    </main>
  );
}
