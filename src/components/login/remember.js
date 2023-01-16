import Auth from "../images/login.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Remember() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [passwordC, setPasswordC] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password, passwordC);
  }

  return (
    <main className="auth-container">
      <div className="auth-image">
        <img src={Auth} alt="authentication" />
      </div>
      <form className="authentication" onSubmit={handleSubmit}>
        <h3>Forgot your password</h3>
        <input
          type="email"
          placeholder="Your email"
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
          placeholder="Confirm Password"
          className="form-input"
          value={passwordC}
          onChange={(e) => setPasswordC(e.target.value)}
        />
        <Link to="" className="form-links">
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
