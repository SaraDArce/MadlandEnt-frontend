import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import Artist from "./components/Artist";
import RegForm from "./pages/RegForm";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BookingForm from "./pages/BookingForm";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/artists/:artistName" element={<Artist />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/bookingForm" element={<BookingForm />} />
      </Routes>
      <Footer />
    </div>
  );
}
