import React from "react";
import "./Hero.scss";

const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <img className="photo" src={hero.image} alt="" />
      <div className="hero-card">
      <h2>
        {hero.fullName}
      </h2>
        <p>{hero.city} </p>
        <p> {hero.phone}</p>
        <p>
          <a href={"mailto:" + hero.email}>{hero.email}
          </a>
        </p>
        <p> 
          <a href={hero.gitHub}>GitHub</a>
          </p>
      </div>
    </div>
  );
};

export default Hero