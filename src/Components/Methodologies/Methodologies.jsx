import React from "react";
import "./methodologies.css";

const methodologiesArr = ["Methodologies", "Scrum", "Agile", "GTD"];

export default function Methodologies() {
  return (
    <div className="soft-skills-container">
      <h3 className="soft-skills-title">Methodologies</h3>
      <ul>
        {methodologiesArr.map((method) => (
          <li key={method} className="soft-skills-item">
            <span className="soft-skill-text">{method}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
