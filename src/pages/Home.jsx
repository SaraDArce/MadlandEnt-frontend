import React from "react";
import { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Artists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const getArtists = async () => {
      try {
        const response = await fetch("http://localhost:8000/artists");
        const data = await response.json();
        setArtists(data);
      } catch (e) {
        console.log(e);
      }
    };
    getArtists();
  }, []);

  return (
    <>
      <h1>Madland Entertainment</h1>
      <div className="container">
        {artists.length ? (
          artists.map((a) => {
            return (
              <div
                key={a._id}
                style={{
                  border: "2px solid white",
                  margin: "5px",
                  padding: "10px",
                }}
              >
                <img className="image" src={a.image} alt={a.artist} />
                <h4>{a.artist}</h4>
                <p>{a.description}</p>
                <Link to={`/artists/${a.artist}`}>Inquire</Link>
              </div>
            );
          })
        ) : (
          <p>No artists found :/</p>
        )}
      </div>
    </>
  );
};

export default Artists;
