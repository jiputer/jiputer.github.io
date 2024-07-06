import "./MainPage.css"
import AboutMe from "../aboutMe/AboutMe";
// import Navbar from "../navbar/NavBar";

import Background from "../background/Background";


function MainPage() {

  
  return (
    <div className = "mainContainer">
   

    {/* <Navbar/> */}
    <div id="aboutme" className = "landingContainer">
      <AboutMe />
    </div>

    <footer>
      Created by John P. Ma                                             
    </footer>
    </div>
  );
}

export default MainPage;
