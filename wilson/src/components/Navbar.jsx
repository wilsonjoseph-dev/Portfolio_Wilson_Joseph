import React from "react";
import logo from "../../src/assets/navlogo.png";
import contactme from "../../src/assets/message-regular.svg";
import Menu from "../../src/assets/menu.png";
import { Link } from "react-scroll";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [ShowMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="" className="logo" />
      <div className="desktopmenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          className="desktopmenulist"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="SkillSec"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          className="desktopmenulist"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="Portfolio"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          className="desktopmenulist"
        >
          Portfolio
        </Link>
      </div>
      <button
        className="menubtn"
        onClick={() => {
          document
            .getElementById("ContactSec")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contactme} alt="" className="contacticon" />
        Contact Me
      </button>
      <img
        src={Menu}
        alt="Menu"
        className="MobMenuIcon"
        onClick={() => setShowMenu(!ShowMenu)}
      />
      <div className="MobMenu" style={{ display: ShowMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          className="ListItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="SkillSec"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          className="ListItem"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="Portfolio"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          className="ListItem"
          onClick={() => setShowMenu(false)}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="ContactSec"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          className="ListItem"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
