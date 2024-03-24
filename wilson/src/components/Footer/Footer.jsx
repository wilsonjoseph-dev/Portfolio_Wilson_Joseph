import React from "react";
import "./Footer.css";

const date = new Date();
let currentYear = date.getFullYear();

const Footer = (footer) => {
  return (
    <footer className="Footer" id="Footer">
      Copyright &#169; {currentYear} Wilson Joseph .All Rights Reserved
    </footer>
  );
};

export default Footer;
