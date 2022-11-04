import React from "react";
import "./experience.css";

export default function Experience() {
  return (
    <div>
      <h3 className="about-me-title">WORK EXPERIENCE</h3>

      <div className="indent">
        <h4 className="profession-title">
          Education Mentor {}
          <span className="profession-company">
            GoIT - start your career in IT
          </span>
        </h4>
        <span className="profession-time">
          July 2022 - up to now {}
          <span className="divider">|</span> Ukraine
        </span>
        <p className="design">Duties:</p>
        <ul className="profession-duties">
          <li className="profession-duties-item">Mentoring.</li>
          <li className="profession-duties-item">Checking homework.</li>
          <li className="profession-duties-item">Student consultation.</li>
        </ul>

        {/* <p className="design">Achievements:</p>
        <ul className="profession-duties">
          <li className="profession-duties-item">
            Optimization of many processes.
          </li>
          <li className="profession-duties-item">
            Promotion to head of department.
          </li>
        </ul> */}
      </div>

      <div className="indent">
        <h4 className="profession-title">
          Senior Process Engineer {}
          <span className="profession-company">Paritet</span>
        </h4>
        <span className="profession-time">
          July 2016 - July 2022 {}
          <span className="divider">|</span> Ukraine
        </span>
        <p className="design">Duties:</p>
        <ul className="profession-duties">
          <li className="profession-duties-item">Product optimization.</li>
          <li className="profession-duties-item">
            Communication with workers.
          </li>
          <li className="profession-duties-item">Conducting inventories.</li>
        </ul>
        <p className="design">Achievements:</p>
        <ul className="profession-duties">
          <li className="profession-duties-item">
            Optimization of many processes.
          </li>
          <li className="profession-duties-item">
            Promotion to head of department.
          </li>
        </ul>
      </div>

      <div>
        <h3 className="about-me-title">EDUCATION</h3>
        <div className="indent">
          <h4 className="education">IT School GoIT</h4>
          <h4 className="prof">Full Stack Developer</h4>
          <p className="profession-time">April 2021 - June 2022</p>
        </div>

        <div className="indent">
          <h4 className="education">Odessa National Polytechnic University</h4>
          <h4 className="prof">Robotics Engineer</h4>
          <p className="profession-time">Septermber 2008 - June 2013</p>
        </div>
      </div>
    </div>
  );
}
