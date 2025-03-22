import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact-form.css";
import { Button } from "@mui/material";

const ContactForm = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8umzsu2", // Replace with your EmailJS service ID
        "template_ta2qs5g", // Replace with your EmailJS template ID
        form.current,
        "k1xhd6zpmT1BWXMr6" // Replace with your EmailJS user ID (or public key)
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage("Message sent successfully!");
        },
        (error) => {
          console.error(error.text);
          setStatusMessage("An error occurred. Please try again later.");
        }
      );
    e.target.reset();
  };

  return (
    <form ref={form} className="contact-form-container" onSubmit={handleSubmit}>
      <div className="contact-info">
        <div className="form-input-container">
          <label htmlFor="fullName" className="contact-form-label">
            Full Name*
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            className="contact-form-input"
          />
        </div>

        <div className="form-input-container">
          <label htmlFor="email" className="contact-form-label">
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="contact-form-input"
          />
        </div>

        <div className="form-input-container">
          <label htmlFor="phone" className="contact-form-label">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="contact-form-input"
          />
        </div>

        <div className="form-input-container">
          <label htmlFor="reason" className="contact-form-label">
            Reason
          </label>
          <select id="reason" name="reason" className="contact-form-select">
            <option value="Job Opening">Job Opening</option>
            <option value="New Project">New Project</option>
            <option value="Support">Support</option>
          </select>
        </div>
      </div>

      <div className="contact-content">
        <div className="form-input-container">
          <label htmlFor="title" className="contact-form-label">
            Title*
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="contact-form-input"
          />
        </div>
        <div className="form-input-container">
          <label htmlFor="message" className="contact-form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="contact-form-textarea"
          ></textarea>
        </div>
      </div>
      <Button type="submit" variant="contained">
        Submit
      </Button>
      <p className="status-message">{statusMessage}</p>
    </form>
  );
};

export default ContactForm;
