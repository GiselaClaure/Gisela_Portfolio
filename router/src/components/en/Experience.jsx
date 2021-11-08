import React from "react";
import "./Experience.scss";

const Experience = ({ experience }) => {
  return (
    <div>
      <div className="experience-card">
        {experience.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <h3 className="name">💻 {item.name}</h3>
              <p class="text">{item.where}</p>
              <p class="text">{item.date}</p>
              <p class="text">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;