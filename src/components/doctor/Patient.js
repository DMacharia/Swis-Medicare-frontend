import "./patient.css";
import { useParams } from "react-router-dom";

export default function DoctorView({ data }) {
  const { id } = useParams();

  return (
    <section className="patient-display">
      <h3>John Doe</h3>

      <div id="patient-info">
        <span className="patient-attrs">Sex: Male</span>
        <span className="patient-attrs">Age: 25</span>
        <span className="patient-attrs">B.M.I: 19</span>
        <span className="patient-attrs">Blood Type: A-</span>
      </div>

      <form id="patient-display-form">
        <span className="patient-display-conts1">
          <h5>Patients Description</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            ipsum ex, placerat a dapibus et, molestie sed diam. Vestibulum
            vestibulum consectetur mattis. Nulla est risus, pulvinar vitae orci
            finibus, tristique vulputate tortor. Duis malesuada, mauris vel
            volutpat pellentesque, odio tellus ornare tortor, id convallis ex
            ligula ac augue. Integer bibendum.
          </p>
        </span>

        <span className="patient-display-conts">
          <p>Patients diagnosis</p>
          <textarea type="text" />
        </span>

        <span className="patient-display-disease">
          <p>Possible diseases</p>
          <input type="text" placeholder="possible disease" />
        </span>

        {/* <span className="patient-display-conts"></span> */}
        {/* <span className="patient-display-conts"></span> */}
        <button type="submit" id="patient-display-cont-button">
          Update
        </button>
      </form>
    </section>
  );
}
