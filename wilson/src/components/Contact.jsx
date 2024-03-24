import React from "react";
import "./Contact.css";
import Instagram from "../assets/instagram.png";
import Facebook from "../assets/facebook.png";
import Linkedin from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";

const Contact = () => {
  return (
    <article className="ContactSec" id="ContactSec">
      <h3 className="ContactHead">Contact me</h3>
      <p className="ContactDesc">
        Please fill out the form below to discuss any work opputunities
      </p>
      <form action="" className="ContactForm">
        <input type="text" placeholder="Enter Your Name" className="Name" />
        <input
          type="email"
          placeholder="Enter Your Email Id"
          className="Email"
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
