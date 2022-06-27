import React from "react";
import "./projects.css";

const projectsArra = [
  {
    name: "Books Reading",
    workLink: "https://books-reading-react-node.netlify.app/login",
    gitLink: "https://github.com/IlyaKaplan2002/node-react_project",
    technologies:
      "HTML5, CSS3, SASS, React, Redux, API, NodeJS, Express, MongoDB",
    about:
      "Mobile-first adaptive landing page. Application for keeping statistics of books read. Work in a team using Scrum. Role: Developer. ",
  },
  {
    name: "ContactsDB",
    workLink: null,
    gitLink: "https://github.com/ToyEye/nodejs-homework-template",
    technologies: "NodeJS, MongoDB, REST API, Mongoose,Multer, Authorization",
    about: "Back-end app for storage contacts for users. Self project.",
  },
  {
    name: "Phonebook",
    workLink: "https://kav-phonebook.netlify.app",
    gitLink: "https://github.com/ToyEye/goit-react-hw-08-phonebook",
    technologies: "HTML5, CSS3, SASS, JavaScript,React, API, WebPack",
    about:
      "Phone book. Developed user registration and logging. The application can store the contact's name/phone number. Self project.",
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
      "Mobile-first adaptive landing page. Application for choosing a movie. Work in a team using Scrum. Role: Developer.",
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
