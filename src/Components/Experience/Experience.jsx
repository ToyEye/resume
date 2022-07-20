import React from "react";
import "./experience.css";

export default function Experience() {
  return (
    <div>
      <h3 className="about-me-title">WORK EXPERIENCE</h3>

      <div className="indent">
        <h4 className="profession-title">
          Senior Process Engineer.
          <span className="profession-company">Paritet</span>
        </h4>
        <span className="profession-time">
          July 2016 - up to now
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

      <div className="indent">
        <h4 className="profession-title">
          Сaster <span className="profession-company">GST</span>
        </h4>
        <span className="profession-time">
          August 2015 - July 2016
          <span className="divider">|</span> Ukraine
        </span>
        <p className="design">Duties:</p>
        <ul className="profession-duties">
          <li className="profession-duties-item">
            Molding of plastic products.
          </li>
          <li className="profession-duties-item">Quality control.</li>
        </ul>

        <p className="design">Achievements:</p>
        <ul className="profession-duties">
          <li className="profession-duties-item">
            Injection of plastic parts.
          </li>
          <li className="profession-duties-item">Training.</li>
          <li className="profession-duties-item">Promotion to senior shift.</li>
        </ul>
      </div>

      <div>
        <h3 className="about-me-title">EDUCATION</h3>
        <div className="indent">
          <h4 className="education">IT School GoIT</h4>
          <h5 className="prof">Full Stack Developer</h5>
          <span className="profession-time">April 2021 - June 2022</span>
        </div>

        <div className="indent">
          <h4 className="education">Odessa National Polytechnic University</h4>
          <h5 className="prof">Robotics Engineer</h5>
          <span className="profession-time">Septermber 2008 - June 2013</span>
        </div>
      </div>
    </div>
  );
}
