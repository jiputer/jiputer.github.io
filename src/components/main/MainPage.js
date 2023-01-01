import "./MainPage.css"
import { CoursesButton, ExperienceButton, GithubButton, LinkedInButton, ProjectsButton, ResumeButton } from "../buttons";
import AboutMe from "../aboutMe/AboutMe";
import Navbar from "../navbar/NavBar";
import Projects from "../projects/ProjectsSection";
import Background from "../background/Background";

function MainPage() {
  return (
    <div className = "mainContainer">
    <Background/>
    <div className = "landingContainer">
      <AboutMe/>
          <div className="container">
            <CoursesButton/>
            <ExperienceButton/>
            <ProjectsButton/>
            <ResumeButton/>
          </div>
    </div>
    <div className = "landingContainer">
    <Navbar/>
    <Projects/>
    </div>
    </div>
  );
}

export default MainPage;
