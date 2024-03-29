import React from "react";
import "./contacts.css";

export default function ContactContainer() {
  return (
    <div className="contacts-container">
      <h3 className="contacts-title">Contacts</h3>
      <div>
        <span className="link-type">Odesa</span>
      </div>
      <div className="contatcs-design">
        <span className="link-type"> </span>
        <a className="contacts-link" href="tel:+380974991282">
          +38 097 499 12 82
        </a>
      </div>
      <div className="contatcs-design">
        <span className="link-type"> </span>
        <a className="contacts-link" href="mailto:alexey.korotenko90@gmail.com">
          alexey.korotenko90@gmail.com
        </a>
      </div>
      <div className="contatcs-design">
        <span className="link-type"> </span>
        <a
          className="contacts-link"
          href="https://www.linkedin.com/in/alexey-korotenko-379613219/"
        >
          Linkedin
        </a>
      </div>
      <div className="contatcs-design">
        <span className="link-type"> </span>
        <a className="contacts-link" href="https://github.com/ToyEye">
          Github
        </a>
      </div>
    </div>
  );
}
