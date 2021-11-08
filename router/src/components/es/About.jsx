import React from "react";
import "./About.scss";

const About = ({ hero }) => {
  return (
    <div>
      <div className="about-card">
      <h3>Sobre mí:</h3>
        {hero.aboutMe.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p>{item.info}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;