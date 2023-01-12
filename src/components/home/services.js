import "./home.css";
import Sect1 from "../images/tooth2.png";
import Sect2 from "../images/tooth3.png";
import Sect3 from "../images/steth4.png";
import Doc1 from "../images/doc1.png";
import Doc2 from "../images/doc2.png";
import Doc3 from "../images/doc3.png";


export default function Services() {
  return (
    <>
      <section className="services">
        <h3 className="services-header">Services</h3>
        <div className="services-container">
          <span className="services-card">
            <img className="doctor-card-image" src={Sect3} alt="doctor" />
            <h5 className="doctor-card-doc">Skilled Nurses</h5>
            <p className="doctor-card-par">
              Caring is what they were born to do
            </p>
            <button>Read More</button>
          </span>

          <span className="services-card">
            <img className="doctor-card-image" src={Sect1} alt="doctor" />
            <h5 className="doctor-card-doc">Eye Care</h5>
            <p className="doctor-card-par">
              Improved vision for an improved life.
            </p>
            <button>Read More</button>
          </span>
          <span className="services-card">
            <img className="doctor-card-image" src={Sect2} alt="doctor" />
            <h5 className="doctor-card-doc">Dental Care</h5>
            <p className="doctor-card-par">
              You are never fully dressed without a smile.
            </p>
            <button>Read More</button>
          </span>
          <span className="services-card">
            <img className="doctor-card-image" src={Sect3} alt="doctor" />
            <h5 className="doctor-card-doc">Primary Care</h5>
            <p className="doctor-card-par">
              Inspiring better health working for your better health
            </p>
            <button>Read More</button>
          </span>
        </div>
        <div className="services-footer">
          <span className="services-footer-span"></span>
          <span className="services-footer-span"></span>
          <span className="services-footer-span"></span>
        </div>
      </section>

      <section className="services">
        <h3 className="services-header">Meet Our Doctors</h3>
        <div className="services-container">
          <span className="doctor-card">
            <img
              className="doctor-card-image1"
              id="service-image"
              src={Doc1}
              alt="doctor"
            />
            <h5 className="doctor-card-doc">Dr. Tuco Salamanca</h5>
            <p className="doctor-card-par">Dentist</p>
            <button>Read More</button>
          </span>
          <span className="doctor-card">
            <img
              className="doctor-card-image1"
              id="service-image"
              src={Doc2}
              alt="doctor"
            />
            <h5 className="doctor-card-doc">Dr. Sarah Smith</h5>
            <p className="doctor-card-par">Dentist</p>
            <button>Read More</button>
          </span>

          <span className="doctor-card">
            <img
              className="doctor-card-image1"
              id="service-image"
              src={Doc3}
              alt="doctor"
            />
            <h5 className="doctor-card-doc">Dr. Steal Your Man</h5>
            <p className="doctor-card-par">Dentist</p>
            <button>Read More</button>
          </span>
        </div>

        <div className="services-footer">
          <span className="services-footer-span"></span>
          <span className="services-footer-span"></span>
          <span className="services-footer-span"></span>
        </div>
      </section>
    </>
  );
}
