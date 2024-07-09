import React from 'react';
import './projects.css';

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="projectCard"> 
      <a className="projectLink" href={link} target="_blank" rel="noopener noreferrer">
      <div className="projectImage" style={{ backgroundImage: {image} }}></div>
      </a>
      <div className="projectDetails">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      
    </div>
  );
};

export default ProjectCard;
