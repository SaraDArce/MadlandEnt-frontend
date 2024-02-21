import React from "react";
import { useState, useEffect } from "react";
import "./ArtistPage.css";
import { Link } from "react-router-dom";

const Artist = () => {
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

  return (
    <>
      <div className="artistOnePager">
        {{
          border: "2px solid white",
          margin: "5px",
          padding: "10px",
        }}
        <img className="onePagerImage" src={a.image} alt={a.artist} />
        <h2>{a.artist}</h2>
        <h4>{a.description}</h4>
        {/* <Link to={`/pages/bookinginquiryform`}>Inquire</Link> */}
      </div>
    </>
  );
};
export default Artist;
