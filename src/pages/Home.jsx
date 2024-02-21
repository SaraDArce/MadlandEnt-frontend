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
                <div className="card">
                  <img className="img" src={a.image} alt={a.artist} />
                  <h4>{a.artist}</h4>
                  <p>{a.description}</p>
                  <button className="button">
                    <Link to={`/artists/${a.artist}`}>Book</Link>
                  </button>
                </div>
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
