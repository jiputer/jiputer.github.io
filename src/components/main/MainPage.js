import "./MainPage.css"
import ButtonLink  from "../buttons/Button";
import AboutMe from "../aboutMe/AboutMe";
import Navbar from "../navbar/NavBar";
import Projects from "../Sections/ProjectsSection";
import Experience from "../Sections/Experience";
import Background from "../background/Background";

function MainPage() {
  return (
    <div className = "mainContainer">
    <Background/>

    <Navbar/>
    <div id="AboutMe" className = "landingContainer">
      <AboutMe/>
          <div className="buttonContainer">
            
            <ButtonLink link= "#Experience" text = "EXPERIENCE"/>
            <ButtonLink link = "#Projects" text = "PROJECTS"/>
            <ButtonLink link="#Skills" text="SKILLS" />
            <ButtonLink link = "#Resume" text = "RESUME"/>
            
          </div>
    </div>
    <div className = "projectsContainer">
    <Experience/>
    <Projects/>
    </div>
    <footer>
      Created by John P. Ma                                             
    </footer>
    </div>
  );
}

export default MainPage;
