import React, { useEffect } from 'react';
import  NavBarButton  from "./NavBarButton";
import "./navbar.css"
function Navbar() {

  useEffect(() => {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
      
      if (window.scrollY > 650) {
        navbar.style.display = 'block';
        navbar.classList.add('show');
        navbar.classList.add('sticky');

        
      } else {
        navbar.style.display = 'none';
        navbar.classList.remove('sticky');
        navbar.classList.remove('show');

      }
    });
  }, []);

  return (
    <nav className="navbar">
        <div className="barContainer">
        <NavBarButton text = "HOME"/>
        <NavBarButton text = "COURSES"/>
        <NavBarButton text = "EXPERIENCE"/>
        <NavBarButton text = "PROJECTS"/>
        <NavBarButton text = "RESUME"/>
        </div>
    </nav>
    
  );
}

export default Navbar;