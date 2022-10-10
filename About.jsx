import React from "react";
import aboutimage from "../images/about.png";
function About() {
  return (
    <div className="about">
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
      <div className="about-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          mollitia ipsa minus illo minima, vero quia saepe eos officia possimus
          doloribus commodi temporibus inventore iste aut alias provident
          corrupti facere!
        </p>
        <button>Read MORE</button>
      </div>
    </div>
  );
}

export default About;
