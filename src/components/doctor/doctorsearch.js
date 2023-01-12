import "./patient.css";

export default function DoctorSearch() {

  
  return (
    <section id="doctor-search">
      <form id="doctor-search-form">
        <input type="text" placeholder="Search patient" />
        <button type="submit">Search</button>
      </form>

      <div id="doctor-search-cont"></div>
    </section>
  );
}
