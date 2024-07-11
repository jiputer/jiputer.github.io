import React from 'react';
import './projects.css';

const ProjectCard = ({ title, description, image, link,   technologies}) => {
  return (
    <div className="projectCard"> 

    <a className="projectLink" href={link} target="_blank" rel="noopener noreferrer">
        <div className="projectDetails">
        <h3>{title}</h3>
        <p>{description}</p>

        <div className="technologies">
          {technologies && technologies.map((tech, index) => (
            <img key={index} src={tech} alt="Technology icon" className="techIcon" />
          ))}
        </div>
      </div>
      
      <div className="projectImageContainer"><img src={image} alt=""/></div>

      </a>

      
    </div>
  );
};

export default ProjectCard;
