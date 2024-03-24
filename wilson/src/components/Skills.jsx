import React from "react";
import "./Skills.css";
import dataAnalysis from "../assets/data-analysis.png";
import digitalMarketing from "../../src/assets/digital-marketing.png";
import webDevelopment from "../assets/web-development.png";

const Skills = () => {
  return (
    <div>
      <article className="skillSec" id="SkillSec">
        <h2 className="skillTitle">what I do</h2>
        <p className="skillDesc">
          I excel in data analysis, distilling insights from intricate datasets.
          My digital marketing prowess ensures strategic online campaign
          success. As a web developer, I create seamless, visually appealing
          websites for enhanced user experiences.
        </p>
        <div className="skillBars">
          <div className="skillBar">
            <img
              className="skillBarImg"
              src={dataAnalysis}
              alt="data anlysis"
            />
            <div className="skillBarText">
              <h3>Data Analysis</h3>
              <p>
                I specialize in data analysis, employing statistical methods to
                extract actionable insights from complex datasets. My expertise
                includes interpreting data for informed decision-making and
                revealing valuable patterns
              </p>
            </div>
          </div>
          <div className="skillBar">
            <img
              className="skillBarImg"
              src={digitalMarketing}
              alt="data anlysis"
            />
            <div className="skillBarText">
              <h3>Digital Marketing</h3>
              <p>
                I drive strategic online campaigns, optimizing reach through
                social media, SEO, and data-driven decisions. My expertise lies
                in managing digital platforms to enhance brand visibility,
                utilizing compelling narratives for effective audience
                engagement and conversion
              </p>
            </div>
          </div>
          <div className="skillBar">
            <img
              className="skillBarImg"
              src={webDevelopment}
              alt="data anlysis"
            />
            <div className="skillBarText">
              <h3>Web Development</h3>
              <p>
                I specialize in web development, creating visually appealing and
                user-friendly websites with HTML, CSS, JavaScript and React.
                Proficient in responsive design, I translate client visions into
                functional online platforms, ensuring seamless and engaging user
                experiences
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Skills;
