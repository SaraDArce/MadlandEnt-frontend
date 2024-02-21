import { useState, useRef } from "react";
import React from "react";

const BookingForm = () => {
  const [bookingForm, setBookingForm] = useState([]);

  const artistRef = useRef(null);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const inqRef = useRef(null);

  const BASE_URL = "http://localhost:8000/bookingForm";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        artist: artistRef.current.value,
        name: nameRef.current.value,
        phone: phoneRef.current.value,
        email: emailRef.current.value,
        inquiry: inqRef.current.value,
      };

      const response = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      setBookingForm([...bookingForm, data]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h2>Booking Inquiry</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={artistRef} placeholder="artist" />
          <input type="text" ref={nameRef} placeholder="name" />
          <input type="text" ref={phoneRef} placeholder="phone" />
          <input type="text" ref={emailRef} placeholder="email" />
          <textarea type="text" ref={inqRef} placeholder="inquiry" rows="5" />
          <input type="submit" value="submit" />
        </div>
      </form>
    </>
  );
};

export default BookingForm;
