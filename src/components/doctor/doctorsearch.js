import "./patient.css";
import { useState } from "react";

export default function DoctorSearch() {
  let [query, setQuery] = useState("");
  let [result, setResult] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(query);
    // setQuery("");

    fetch("http://localhost:3000/api/v1/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: query }),
    })
      .then((response) => response.json())
      .then((data) => setResult(data))
      .catch((error) => console.error(error));
  }

  console.log(result);

  return (
    <section id="doctor-search">
      <form id="doctor-search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search patient"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div id="doctor-search-cont"></div>
    </section>
  );
}
