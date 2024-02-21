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

  return (
    <div>
      <div className="artistOnePager">
        <img className="onePagerImage" src={artist.image} alt={artist.artist} />
        <h2>{artist.artist}</h2>
        <h4>{artist.description}</h4>
        {/* <Link to={`/pages/bookinginquiryform`}>Inquire</Link> */}
      </div>
    </div>
  );
}
