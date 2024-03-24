import React from "react";
import { Link } from "react-scroll";
import "./Intro.css";
import btnimg from "../../src/assets/hireme.svg";

const Intro = () => {
  return (
    <section className="introSection" id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Wilson Joseph</span>
          <br />
          web Developer
        </span>
        <p className="introPara">
          I'm a skilled web developer with experience in creating visualy
          <br />
          appealing and user friendly websites
        </p>
        <Link>
          <button className="introBtn">
            <img src={btnimg} alt="hire me" className="btnImg" />
            Hire me
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Intro;
