import { useState } from "react";
import '../App.css';
import { About, Education, Experience, More } from "../components/en/index";
import { CV } from "../CV/en-CV";

const { hero, education, experience, habilities, languages, technologies} = CV;

function EN() {
  const [showEducation, setShowEducation] = useState(true);
  return (
      <div className="App">
          {/* <Hero hero={hero} /> */}
          <About hero={hero} />
          <button
              className="custom-btn"
              onClick={() => setShowEducation(true)}
            >
              Education
            </button>
            <button
              className="custom-btn"
              onClick={() => setShowEducation(false)}
            >
              Experience
            </button>
            <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      <More habilities={habilities} languages={languages} technologies={technologies} />
      </div>  
      
  );
}
export default EN;
