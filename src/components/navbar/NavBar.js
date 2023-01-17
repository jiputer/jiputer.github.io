import React, { useEffect } from 'react';
import  NavBarButton  from "./NavBarButton";
import "./navbar.css"
function Navbar() {

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    const h = document.querySelector('body').clientHeight;
    console.log("height: "+ h);
    window.addEventListener('scroll', () => {
      if (window.scrollY > h*0.25) {
        
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