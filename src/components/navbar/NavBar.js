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
    
    console.log("height: "+ h);
    window.addEventListener('scroll', () => {
      if (window.scrollY > h*0.25) {
        if (w < 600){
          setIsOpen(false);
        }
        else{
          setIsOpen(true);
        }
        navbar.style.display = 'block';
        navbar.classList.add('show');
        navbar.classList.add('sticky');
        
        
      } else {
        setIsOpen(false);
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
        <NavBarButton text = "HOME"/>
        <NavBarButton text = "COURSES"/>
        <NavBarButton text = "EXPERIENCE"/>
        <NavBarButton text = "PROJECTS"/>
        <NavBarButton text = "RESUME"/>
        </div>
        )}
    </nav>
    
  );
}

export default Navbar;