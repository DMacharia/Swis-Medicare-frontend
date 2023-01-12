import { Link } from "react-router-dom";
import LandingImage from "../images/landing.png";

import SmallLanding from "../images/smallLanding.png";
import "./home.css";

export default function MainSection() {
  return (
    <section className="main-section">
      <div className="main-section-cont">
        <h2>
          Welcome to <br />
          <strong>Swiss Medicare</strong>
        </h2>

        <Link to="/signup" className="main-section-cont-button">
          Join Us
        </Link>

        <span id="small-container">
          <img src={SmallLanding} alt="home" />
        </span>
      </div>

      <div className="main-section-cont" id="main-section-cont-image">
        <img src={LandingImage} alt="doctor" />
      </div>
    </section>
  );
}
