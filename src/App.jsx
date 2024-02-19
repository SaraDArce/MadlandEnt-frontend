import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Artist from "./components/Artist";
import RegForm from "./pages/RegForm";

export default function App() {
  // const [artists, setArtists] = useState([]);

  // useEffect(() => {
  //   const getArtists = async () => {
  //     try {
  //       const response = await fetch("https://localhost:8000/artists");
  //       const data = await response.json();
  //       setArtists(data);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   getArtists();
  // }, []);

  return (
    <div>
      <Routes>
        {/* <Route path="/:artist" element={<Artist />} /> */}
        <Route path="/artists" element={<Artist />} />
        <Route path="/register" element={<RegForm />} />
      </Routes>
    </div>
  );
}
