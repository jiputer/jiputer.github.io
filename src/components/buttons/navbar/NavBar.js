import React, { useEffect, useState } from 'react';
import  NavBarButton  from "./NavBarButton";
import "./navbar.css"
import HamburgerIcon from "./hamburger.svg"
function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {

    const navbar = document.querySelector('.navbar');
    const h = document.querySelector('body').clientHeight;
    const w = document.querySelector('body').clientWidth;
    if (w < 600){
      setIsOpen(false);
    }

    console.log("height: "+ h);
    window.addEventListener('scroll', () => {
      if (window.scrollY > h*0.20) {
        
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
    <nav className={`navbar ${isOpen ? "show sticky open" : "show sticky"}`}>
        
        <img onClick={() => setIsOpen(!isOpen)} src={HamburgerIcon} className="hamburger" alt="HamburgerIcon"/>

        {isOpen && (
        <div className="barContainer" >
        <NavBarButton link="#aboutme" text = "ABOUT ME"/>
        <NavBarButton link="#experience" text = "EXPERIENCE"/>
        <NavBarButton link="#projects" text = "PROJECTS"/>
        <NavBarButton link="#skills" text = "SKILLS"/>
        <NavBarButton link="https://docs.google.com/document/d/1sUPe8bQDaqvuTIrh3dt37ciO_BN3zJ20lhItL9QA4Uk/edit?usp=sharing" text = "RESUME"/>
        
        </div>
        )}
    </nav>
    
  );
}

export default Navbar;