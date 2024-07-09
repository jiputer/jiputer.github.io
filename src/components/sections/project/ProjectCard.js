import React from 'react';
import './projects.css';

const ProjectCard = ({ title, description, image, link, logos }) => {
  return (
    <div className="projectCard"> 
    <a className="projectLink" href={link} target="_blank" rel="noopener noreferrer">
          <div className="projectDetails">
        <h3>{title}</h3>
        <div><p>{description}</p></div>
        {/* <img src={logos[0]} ></img> */}

      </div>
      
      <div className="projectImageContainer"><img src={image} alt=""/></div>
      </a>

      
    </div>
  );
};

export default ProjectCard;
