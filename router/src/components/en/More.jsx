import React from "react";
import "./More.scss";

const More = ({ habilities, languages, technologies }) => {
  return (
    <>
      <div className="habilities-card">
        <h3>HABILITIES:</h3>
        {habilities.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p>{item}</p>
            </div>
          );
        })}
        <div>
          <h3>LANGUAGES:</h3>
          <p>{languages.language}: {languages.wrlevel}</p>
        </div>
        <h3>TECHNOLOGIES:</h3>
        <div className="tech">
        
        {technologies.map((item) => {
          return (
            <div className="techh" key={JSON.stringify(item)}>
              <img src={item} alt="logo"/>
            </div>
          );
        })}
        </div>

      </div>
    </>
  );
};

export default More;