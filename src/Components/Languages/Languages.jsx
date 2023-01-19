import React from "react";
import "./languages.css";

const languagesArr = [
  "English - Pre-Intermediate",
  "Ukrain - Native",
  "Russian - Native",
];

export default function Languages() {
  return (
    <div className="soft-skills-container">
      <h3 className="soft-skills-title">Languages</h3>
      <ul>
        {languagesArr.map((lang) => (
          <li key={lang} className="soft-skills-item">
            <span className="soft-skill-text">{lang}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
