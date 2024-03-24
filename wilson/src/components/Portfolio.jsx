import React from "react";
import "./Portfolio.css";
import Calculator from "../assets/calculator app.jpg";
import Calendar from "../assets/calendar app.jpg";
import DigitalClock from "../assets/digital clock.jpg";
import FormValidation from "../assets/form validation.jpg";
import LoanCalculator from "../assets/loan calculator.jpg";
import QuizApp from "../assets/quiz app.jpg";
import QuoteGenerator from "../assets/quote generator.jpg";
import TaskSchedule from "../assets/task schedule.jpg";
import WeatherApp from "../assets/weather app.jpg";

const Portfolio = () => {
  return (
    <article className="Portfolio" id="Portfolio">
      <h2 className="PortHead">My Portfolio</h2>
      <p className="PortDesc">
        Welcome to my portfolio! Below, you'll find a selection of projects that
        I've worked on. Each project reflects my passion for coding and my
        commitment to creating meaningful and impactful solutions. Click on the
        project titles to explore the code on GitHub.
      </p>
      <div className="PortWorks">
        <img src={Calculator} alt="" className="PortImg" />
        <img src={Calendar} alt="" className="PortImg" />
        <img src={DigitalClock} alt="" className="PortImg" />
        <img src={FormValidation} alt="" className="PortImg" />
        <img src={LoanCalculator} alt="" className="PortImg" />
        <img src={QuizApp} alt="" className="PortImg" />
        <img src={QuoteGenerator} alt="" className="PortImg" />
        <img src={TaskSchedule} alt="" className="PortImg" />
        <img src={WeatherApp} alt="" className="PortImg" />
      </div>
      <button className="PortButton">see more</button>
    </article>
  );
};

export default Portfolio;
