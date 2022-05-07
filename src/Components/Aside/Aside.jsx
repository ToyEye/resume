import React from "react";
import "./aside.css";

import avatar from "../../img/avatar.jpg";
import ContactContainer from "../Contacts/Contacts";
import TechSkills from "../TechSkills/TechSkills";
import Methodologies from "../Methodologies/Methodologies";
import SoftSkills from "../SoftSkills/SoftSkills";
import Languages from "../Languages/Languages";

export default function Aside() {
  return (
    <aside className="sidebar">
      <img className="my-photo" src={avatar} alt="avatar" />
      <ContactContainer />
      <TechSkills />
      <Methodologies />
      <SoftSkills />
      <Languages />
    </aside>
  );
}
