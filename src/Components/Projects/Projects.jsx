import React from "react";
import "./projects.css";

const projectsArra = [
  {
    name: "ContactsDB",
    workLink: null,
    gitLink: "https://github.com/ToyEye/nodejs-homework-template",
    technologies: "NodeJS, MongoDB, REST API, Mongoose,Multer, Authorization",
    about: "Back-end app for storage contacts for users. Role: Contributor.",
  },
  {
    name: "Phonebook",
    workLink: "https://kav-phonebook.netlify.app",
    gitLink: "https://github.com/ToyEye/goit-react-hw-08-phonebook",
    technologies: "HTML5, CSS3, SASS, JavaScript,React, API, WebPack",
    about:
      "Phone book. Developed user registration and logging. The application can store the contact's name/phone number.",
  },
  {
    name: "IMAGE FINDER",
    workLink: "https://toyeye.github.io/goit-react-hw-04-hooks-images/",
    gitLink: "https://github.com/ToyEye/goit-react-hw-04-hooks-images",
    technologies: "HTML5, CSS3, SASS, React, API",
    about: "Work with API. Self project.",
  },
  {
    name: "FILMOTEKA",
    workLink: "https://andr3008.github.io/best-movies/",
    gitLink: "https://github.com/andr3008/best-movies",
    technologies: "HTML5, CSS3, SASS, JavaScript,Handlebars, API, Parcel",
    about:
      "Mobile-first adaptive landing page. Application for choosing a movie. Role: Contributor.",
  },
  {
    name: "ICECREAM",
    workLink: "https://kostiantyn-radchenko.github.io/teams_project/",
    gitLink: "https://github.com/Kostiantyn-Radchenko/teams_project",
    technologies: "HTML5, CSS3, SASS, BEM, Parcel",
    about:
      "Mobile-first adaptive landing page. Work in a team using Scrum. Role:Contributor.",
  },
  {
    name: "WEB STUDIO",
    workLink: "https://toyeye.github.io/goit-markup-hw-08/",
    gitLink: "https://github.com/ToyEye/goit-markup-hw-08",
    technologies: "HTML5, CSS3, SASS, BEM ",
    about: " Mobile-first adaptive landing page. Self project.",
  },
];

export default function Projects() {
  return (
    <div className="projects-container">
      <h3 className="about-me-title">PROJECTS:</h3>
      {projectsArra.map(({ name, workLink, gitLink, technologies, about }) => (
        <article key={name} className="projects-item">
          <p className="project-name">
            <a className="projects-link" href={workLink}>
              {name},
            </a>
            <a className="projects-link" href={gitLink}>
              Git link
            </a>
          </p>
          <p className="design">
            Technologies:
            <span className="techno-span">{technologies}</span>
          </p>
          <p className="design">{about}</p>
        </article>
      ))}
    </div>
  );
}
