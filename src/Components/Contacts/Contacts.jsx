import React from "react";
import "./contacts.css";

export default function ContactContainer() {
  return (
    <div className="contacts-container">
      <h3 className="contacts-title">Contacts</h3>
      <div>
        <span className="link-type">Odessa city</span>
      </div>
      <div className="contatcs-design">
        <span className="link-type"> </span>
        <a className="contacts-link" href="tel:380931898956">
          +38 067 717 88 60
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
