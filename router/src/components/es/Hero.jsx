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
        <p>📍{hero.city} </p>
        <p>📱 {hero.phone}</p>
        <p>
          <a href={"mailto:" + hero.email}>
          <img class="icon" src="https://cdn0.iconfinder.com/data/icons/email-60/24/email-message-envelope-read-circle-512.png" alt=""/>
          </a>
        </p>
        <p> <a href={hero.gitHub}><img class="icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" alt=""/>
          </a></p>
      </div>
    </div>
  );
};

export default Hero;