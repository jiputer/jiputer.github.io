import React from 'react';
import './projects.css';

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="projectCard"> 
    <a className="projectLink" href={link} target="_blank" rel="noopener noreferrer">
          <div className="projectDetails">
        <h3>{title}</h3>
        <div><p>{description}</p></div>
      </div>
      
      <div className="projectImageContainer"><img src={image} alt=""/></div>
      </a>

      
    </div>
  );
};

export default ProjectCard;
