import { useNavigate } from "react-router-dom";
import { Patientsdata } from "../../data";

export default function DoctorList() {
  let navigate = useNavigate();

  let patients = Patientsdata.map((e) => {
    return (
      <li
        className="doctor-patient"
        key={e.id}
        onClick={() => {
          navigate(`${e.id}`);
        }}
      >
        <span className="doctor-item-name">{e.name}</span>
        <span className="doctor-item-email">mok@gmail.com</span>
        <span className="doctor-item-age">25</span>
        <span className="doctor-item-sex">Male</span>
        <span className="doctor-item-bmi">19</span>
      </li>
    );
  });

  return (
    <>
      <h2 id="doctor-container-header">Patients</h2>
      <div id="doctor-item-header">
        <span className="doctor-item-name">Name</span>
        <span className="doctor-item-email">Email</span>
        <span className="doctor-item-age">Age</span>
        <span className="doctor-item-sex">Sex</span>
        <span className="doctor-item-bmi">B.M.I</span>
      </div>
      <ul id="doctor-patient-list">{patients}</ul>;
      <div id="doctor-list-footer">
        <button id="doctor-back" className="doctor-nav">
          Back
        </button>
        <button id="doctor-next" className="doctor-nav">
          Next
        </button>
      </div>
    </>
  );
}
