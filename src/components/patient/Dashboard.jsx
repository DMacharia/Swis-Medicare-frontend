// import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Histories from "./Histories";
import Home from "./Home";
import Profile from "./Profile";
import "./dashboard.css";

function Dashboard() {
  return (
    <BrowserRouter>
      <div className="dashboard">
        <div className="sidebar">
          <a href="/">Home</a>
          <a href="/profile">Profile</a>
          <a href="/histories">Histories</a>
        </div>
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/histories" element={<Histories />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Dashboard;
