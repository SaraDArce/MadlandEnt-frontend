import { useState, useRef } from "react";
import React from "react";

const RegForm = () => {
  // function RegForm() {
  const [artist, setArtist] = useState([]);
  const [deleteToggle, setDeleteToggle] = useState(false);
  const artistRef = useRef(null);
  const contactRef = useState(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const coRef = useRef(null);
  const webRef = useRef(null);
  const desRef = useRef(null);
  const passRef = useRef(null);
  const inqRef = useRef(null);
  const imgRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        artist: artistRef.current.value,
        contact: contactRef.current.value,
        phone: phoneRef.current.value,
        email: emailRef.current.value,
        company: coRef.current.value,
        website: webRef.current.value,
        description: desRef.current.value,
        password: passRef.current.value,
        inquiry: inqRef.current.value,
        image: imgRef.current.value,
      };
      const response = await fetch(`${BASE_URL}/artists`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();

      setArtist([...artist, data]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h4>Register</h4>
      <div className="form">
        <form style={{ textAlign: "left" }} onSubmit={handleSubmit}>
          Artist: <input type="text" ref={artistRef} />
          <br />
          Contact: <input type="text" ref={contactRef} />
          <br />
          Phone: <input type="text" ref={phoneRef} />
          <br />
          Email: <input type="text" ref={emailRef} />
          <br />
          Company: <input type="text" ref={coRef} />
          <br />
          Website: <input type="text" ref={webRef} />
          <br />
          Description: <input type="text" ref={desRef} />
          <br />
          Password: <input type="text" ref={passRef} />
          <br />
          Inquiry <input type="text" ref={inqRef} />
          <br />
          Image <input type="text" ref={imgRef} />
          <br />
          <input type="submit" value="Create Artist" />
        </form>
      </div>
      <div>
        <ul>
          {artist.length ? (
            artist.map((b) => {
              return (
                <div
                  style={{
                    border: "2px solid white",
                    margin: "5px",
                    padding: "10px",
                  }}
                >
                  <h4>{<artist />}</h4>
                  <p>{b.description}</p>
                  <button
                    onClick={async () => {
                      try {
                        await fetch(`${BASE_URL}/artists/:id` + b._id, {
                          method: "DELETE",
                        });
                        setDeleteToggle(!deleteToggle);
                      } catch (e) {
                        console.log(e);
                      }
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            })
          ) : (
            <p></p>
          )}
        </ul>
      </div>
    </>
  );
};

export default RegForm;
