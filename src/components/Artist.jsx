import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Artist.css";

export default function Artist() {
  const [artist, setArtist] = useState([]);
  const { artistName } = useParams();

  useEffect(() => {
    const getArtist = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/artists/" + artistName
        );
        const data = await response.json();
        setArtist(data);
      } catch (e) {
        console.log(e);
      }
    };
    getArtist();
  }, []);

  return <div id="card"></div>;
}
