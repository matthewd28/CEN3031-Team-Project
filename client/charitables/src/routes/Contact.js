import React, { useState } from "react";
import "./Contact.css";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/83857590-70fa-11ed-a377-655c67143cec";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you for your message!</h2>
      </>
    );
  }

  return (
    <div className="contact">
      <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
      >
        <h1 className="greenHeader">Contact Us</h1>
        <input
          name="name"
          type="text"
          className="feedback-input"
          placeholder="Name"
          autoComplete="off"
          required
        />
        <input
          name="email"
          type="text"
          className="feedback-input"
          placeholder="Email"
          autoComplete="off"
          required
        />
        <textarea
          name="text"
          className="feedback-input"
          placeholder="Message"
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;
