import React from "react";
import "./AboutMe.css";

import Projects from "../Projects/Projects";
import InfoContainer from "../InfoContainer/InfoConainer";
import Experience from "../Experience/Experience";

export default function AboutMe() {
  return (
    <div className="about-me">
      <InfoContainer />
      <Projects />
      <Experience />
    </div>
  );
}
