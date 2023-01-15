import { Link } from "react-router-dom";
import Auth from "../images/login.jpg";
import { useState} from "react";

export default function Signup() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [passwordC, setPasswordC] = useState("");

  function handleFormButtons(e) {
    e.preventDefault();
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email, password, passwordC);
  }
  return (
    <main className="auth-container">
      <div className="auth-image">
        <img src={Auth} alt="authentication" />
      </div>
      <form className="authentication" onSubmit={handleSubmit}>
        <h3>Get started.</h3>
        <span className="form-buttons">
          <button onClick={handleFormButtons}>Patient</button>
          <button onClick={handleFormButtons}>Doctor</button>
          <button onClick={handleFormButtons}>Admin</button>
        </span>
        <input
          type="text"
          placeholder="Username"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="form-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password Confirmation"
          className="form-input"
          value={passwordC}
          onChange={(e) => setPasswordC(e.target.value)}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
        <Link to="/login" className="form-links">
          Have an account?
        </Link>
      </form>
    </main>
  );
}
