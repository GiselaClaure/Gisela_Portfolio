import { useState } from "react";
import '../App.css';
import { About, Education, Experience, More } from "../components/es/index";
import { CV } from "../CV/es-CV";

const { hero, education, experience, habilities, languages, technologies} = CV;

function ES() {
  const [showEducation, setShowEducation] = useState(true);
  return (
      <div className="App">
          {/* <Hero hero={hero} /> */}
          <About hero={hero} />
          <button
              className="custom-btn"
              onClick={() => setShowEducation(true)}
            >
              Formación
            </button>
            <button
              className="custom-btn"
              onClick={() => setShowEducation(false)}
            >
              Experiencia
            </button>
            <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      <More habilities={habilities} languages={languages} technologies={technologies}/>
      </div>  
      
  );
}
export default ES;
