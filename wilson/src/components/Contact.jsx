import React from "react";
import "./Contact.css";
import Instagram from "../assets/instagram.png";
import Facebook from "../assets/facebook.png";
import Linkedin from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b9343il",
        "template_7s29w4z",
        form.current,
        "aSA3I4-TvePYqJSDF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <article className="ContactSec" id="ContactSec">
      <h3 className="ContactHead">Contact me</h3>
      <p className="ContactDesc">
        Please fill out the form below to discuss any work opputunities
      </p>
      <form action="" className="ContactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          placeholder="Enter Your Name"
          className="Name"
          name="from_name"
        />
        <input
          type="email"
          placeholder="Enter Your Email Id"
          className="Email"
          name="from_email"
        />
        <textarea
          placeholder="Enter Your Message Here"
          name="message"
          className="Message"
          type="message"
        />
        <button type="submit" value="send" className="SubmitBtn">
          submit
        </button>
        <div className="links">
          <img src={Instagram} alt="instagram" className="Link" />
          <img src={Facebook} alt="facebook" className="Link" />
          <img src={Linkedin} alt="linkedin" className="Link" />
          <img src={Twitter} alt="twitter" className="Link" />
        </div>
      </form>
    </article>
  );
};

export default Contact;
