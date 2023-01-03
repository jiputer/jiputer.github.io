import React, { useEffect } from 'react';
import { CoursesButton, ExperienceButton, HomeButton, ProjectsButton, ResumeButton } from "../buttons";
import "./navbar.css"
function Navbar() {

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 650) {
        navbar.style.display = 'block';
        navbar.classList.add('sticky');

        
      } else {
        navbar.style.display = 'none';
        
        navbar.classList.remove('sticky');
        
      }
    });
  }, []);

  return (
    <nav className="navbar">
        <div className="barContainer">
        <HomeButton/>
        <CoursesButton/>
        <ExperienceButton/>
        <ProjectsButton/>
        <ResumeButton/>
        </div>
    </nav>
  );
}

export default Navbar;