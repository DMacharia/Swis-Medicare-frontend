// import { useState } from "react";
// import "./././login.css";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [values, setValues] = useState({
//     username: "",
//     password: "",
//   });
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch("https://swis-medicare-eblx.onrender.com/api/v1/login", {
//       method: "POST",
//       headers: {
//         Accepts: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username: values.username,
//         password: values.password,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.jwt) {
//           localStorage.setItem("jwt", data.jwt);
//           const role = data.user.role;
//           if (role === "Admin") {
//             navigate("/Adminhome");
//           } else if (role === "Doctor") {
//             navigate("/doctors");
//           } else if (role === "Patient") {
//             navigate("/patient");
//           }
//         } else {
//           console.log(data.errors);
//         }
//         console.log(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="login__form">
//       <input
//         className="login__inputs user__name"
//         type="text"
//         name="username"
//         placeholder="Username"
//         value={values.username}
//         onChange={(e) => setValues({ ...values, username: e.target.value })}
//       />
//       <input
//         className="login__inputs user__password"
//         type="password"
//         name="password"
//         placeholder="Password"
//         value={values.password}
//         onChange={(e) => setValues({ ...values, password: e.target.value })}
//       />
//       <button className="login__btn" type="submit" onClick={handleSubmit}>
//         Login
//       </button>
//     </div>
//   );
// }
// export default Login;

import "./login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../images/login.jpg";

export default function Login() {
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, password);
  }

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
