import "./patient.css";
// import { useParams } from "react-router-dom";

export default function DoctorView() {
  //   const { id } = useParams();
  return (
    <main id="doctor">
      <header id="doctor-header">
        <span id="doctor-logo">Swiss Medicare</span>
        <span className="doctor-links">Home</span>
        <span className="doctor-links">Patients</span>
        <span className="doctor-links">Profile</span>
        <span id="doctor-logout">Log Out</span>
      </header>

      <section id="patient-section">
        <form>
          <div id="patient-bio">
            <span id="patient-bio-image">
              <img src="#" alt="profile" />
            </span>

            <span id="patient-bio-contact">
              <p>Enock Mokua Nyanchoga</p>
              <p>mokuaenock0@gmail.com</p>
              <p>+25470010000</p>
            </span>
            <span id="patient-bio-appointment">
              <p>Appointment date: 22/01/2023</p>
              <p>Appointment time: 14:00 hrs</p>
              <p>Date Scheduled: 15/01/2023</p>
            </span>
            <span id="patient-bio-"></span>
          </div>

          <div id="patient-details">
            <span className="details" id="detail">
              Nairobi, Kenya
            </span>
            <span className="details" id="detail">
              Male
            </span>
            <span className="details" id="detail">
              Outpatient
            </span>
            <span className="details" id="detail">
              Malaria
            </span>
            <span className="details" id="detail">
              BMI: 22.7
            </span>
          </div>

          <div className="patient-allergies">
            <h4>Allergies</h4>
            <ol id="allergy-list">
              <li className="allergy-item">Lorem ipsum dolor sit amet.</li>
              <li className="allergy-item">Lorem ipsum dolor sit amet.</li>
              <li className="allergy-item">Lorem ipsum dolor sit amet.</li>
              <li className="allergy-item">Lorem ipsum dolor sit amet.</li>
            </ol>
          </div>

          <div className="patient-allergies">
            <h4>Current conditions</h4>
            <ol id="allergy-list">
              <li className="allergy-item">Lorem ipsum dolor sit amet.</li>
              <li className="allergy-item">Lorem ipsum dolor sit amet.</li>
              <li className="allergy-item">Lorem ipsum dolor sit amet.</li>
              <li className="allergy-item">Lorem ipsum dolor sit amet.</li>
            </ol>
          </div>

          <div className="patient-allergies">
            <h4>Current Medication</h4>
            <ol id="allergy-list">
              <li className="allergy-item">Lorem ipsum dolor sit amet.</li>
              <li className="allergy-item">Lorem ipsum dolor sit amet.</li>
              <li className="allergy-item">Lorem ipsum dolor sit amet.</li>
              <li className="allergy-item">Lorem ipsum dolor sit amet.</li>
            </ol>
          </div>

          <div id="patient-feeling">
            <h4>Patient's feeling</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              vitae faucibus tortor. Nulla facilisi. Sed tristique fringilla
              lorem et vulputate. Suspendisse varius finibus ligula sit amet
              fermentum. Ut pellentesque semper posuere. Aenean a augue et ante
              tincidunt faucibus. Sed lorem elit, vestibulum et erat eget,
              tempor accumsan tortor. Suspendisse vitae enim id ante porta
              fermentum. Nullam dolor lorem, vulputate sed porttitor id,
              malesuada nec risus. Sed quis vestibulum arcu, at condimentum
              elit. Mauris et purus suscipit, fermentum dui at, aliquam elit.
              Aliquam ante tellus, vehicula in felis et, porta finibus lorem.
              Aliquam tempus sapien sed neque convallis ultrices at a.
            </p>
          </div>

          <div id="patient-diagnosis">
            <h4>Doctors Diagnosis</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              vitae faucibus tortor. Nulla facilisi. Sed tristique fringilla
              lorem et vulputate. Suspendisse varius finibus ligula sit amet
              fermentum. Ut pellentesque semper posuere. Aenean a augue et ante
              tincidunt faucibus. Sed lorem elit, vestibulum et erat eget,
              tempor accumsan tortor. Suspendisse vitae enim id ante porta
              fermentum. Nullam dolor lorem, vulputate sed porttitor id,
              malesuada nec risus. Sed quis vestibulum arcu, at condimentum
              elit. Mauris et purus suscipit, fermentum dui at, aliquam elit.
              Aliquam ante tellus, vehicula in felis et, porta finibus lorem.
              Aliquam tempus sapien sed neque convallis ultrices at a.
            </p>
          </div>

          <div id="patient-disease">
            <p>Possible disease:</p> &nbsp;&nbsp;&nbsp;
            <input type="text" placeholder="Possible diseases" />
          </div>

          <div id="patient-notes">
            <h4>Additional notes</h4>
            <textarea placeholder="Additional notes..." />
          </div>

          <button type="submit" id="patient-submit">
            Submit
          </button>
        </form>
      </section>

      <aside id="doctor-aside"></aside>
    </main>
  );
}
