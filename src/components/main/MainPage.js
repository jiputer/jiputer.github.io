import "./MainPage.css"
import ButtonLink  from "../buttons/Button";
import AboutMe from "../aboutMe/AboutMe";
import Navbar from "../navbar/NavBar";
import Projects from "../sections/ProjectsSection";
import Experience from "../sections/Experience";
import Background from "../background/Background";
import Skills from "../sections/Skills";

function MainPage() {
  return (
    <div className = "mainContainer">
    <Background/>

    <Navbar/>
    <div id="aboutme" className = "landingContainer">
      <AboutMe/>
          <div className="buttonContainer">
            
            <ButtonLink link= "#experience" text = "EXPERIENCE"/>
            <ButtonLink link = "#projects" text = "PROJECTS"/>
            <ButtonLink link="#skills" text="SKILLS" />
            <ButtonLink link = "#resume" text = "RESUME"/>
            
          </div>
    </div>
    <div className = "projectsContainer">
    <Experience/>
    <Projects/>
    <Skills/>
    </div>
    <footer>
      Created by John P. Ma                                             
    </footer>
    </div>
  );
}

export default MainPage;
