import { Link, Outlet } from "react-router-dom";
import React from "react";

export default function Doctor() {
  return (
    <main id="doctor">
      <span id="doctor-header">
        <Link to="/doctor/search">Search</Link>
        <Link to="/doctor/list">Patients</Link>
      </span>
      <section id="doctor-container">
        <Outlet />
      </section>
    </main>
  );
}
