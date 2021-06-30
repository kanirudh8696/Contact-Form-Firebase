import React, { useState } from "react";
import "../App.css";
import { database } from "../Firebase";

function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const formSubmitHandler = (event) => {
    event.preventDefault();
    database
      .collection("contacts")
      .add({
        name: name,
        phone: phone,
        email: email,
        message: message,
      })
      .then(() => alert("Meassage Submitted Succesfully"))
      .catch((error) => alert(error.message));
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };
  return (
    <form className="form" onSubmit={formSubmitHandler}>
      <h1>Contact Form </h1>
      <label>Name</label>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label>Phone Number</label>
      <input
        type="tel"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        required
        placeholder="012-345-6789"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <label>Email</label>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
