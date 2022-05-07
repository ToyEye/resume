import React from "react";
import "./softSkills.css";

const SoftSkillsArr = [
  "Conscientious",
  "Calm",
  "Eager to learn",
  "Teamwork",
  "Hardworking",
  "Punctual",
];

export default function SoftSkills() {
  return (
    <div className="soft-skills-container">
      <h3 className="soft-skills-title">Soft Skills</h3>
      <ul>
        {SoftSkillsArr.map((skill) => (
          <li key={skill} className="soft-skills-item">
            <span className="soft-skill-text">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
