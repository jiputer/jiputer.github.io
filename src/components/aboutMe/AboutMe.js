import "./AboutMe.css";
import "../main/MainPage.css"
import ButtonLink from "../buttons/Button";
import IconBar from "./IconBar";
import React, { useState } from 'react';
import CurrentSubject from "./CurrentSubject";

function AboutMe( ) {
  const [selectedContent, setSelectedContent] = useState('');

  const handleChange = (newState) => {
    setSelectedContent(newState);
  };

  return (
    <div className="aboutMeContainer">
      <header className="stdHeader">John Ma</header>
      <IconBar/>
      <div className="buttonContainer">
      <ButtonLink text = "ABOUT ME" onClick={() => {console.log('About Me clicked'); handleChange('bio'); }} />
      <ButtonLink text="EXPERIENCE" onClick={() => {console.log('Experience clicked'); handleChange('experience'); }} />
      <ButtonLink text="PROJECTS" onClick={() => {console.log('Projects clicked'); handleChange('projects'); }} />
      <ButtonLink text="🤠" onClick={() => {console.log('extras clicked'); handleChange('extras'); }}/>
      </div>
      <CurrentSubject content={selectedContent}/>

    </div>
  );
}

export default AboutMe;
