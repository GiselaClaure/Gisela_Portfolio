import React from "react";
import "./Education.scss";

const Education = ({ education }) => {
  return (
    <div>
      <div className="education-card">
        {education.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <h3 className="name">📔 {item.name}</h3>
              <p class="text"><strong>{item.where}</strong></p>
              <p class="text">{item.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;