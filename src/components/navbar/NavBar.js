import React, { useEffect } from 'react';

function Navbar() {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    });
  }, []);

  return (
    <nav className="navbar">
      {/* navbar content goes here */}
    </nav>
  );
}

export default Navbar;