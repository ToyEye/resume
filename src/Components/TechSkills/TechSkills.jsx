import React from "react";
import "./techSkills.css";

const teackSkillsArr = [
  "HTML5",
  "CSS3",
  "GIT",
  "WebPack",
  "JavaScript",
  "React",
  "Redux",
  "NodeJs",
  "MongoDB",
  "Mongoose",
];

export default function TechSkills() {
  return (
    <div className="tech-skills-container">
      <h3 className="tech-skills-title">Tech Skills</h3>
      <ul>
        {teackSkillsArr.map((skill) => (
          <li key={skill} className="tech-skills-item">
            <span className="tech-skill-text">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
