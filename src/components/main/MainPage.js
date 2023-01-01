import "./MainPage.css"
import { CoursesButton, ExperienceButton, GithubButton, LinkedInButton, ProjectsButton, ResumeButton } from "../buttons";
import AboutMe from "../aboutMe/AboutMe";

function MainPage() {
  return (
    <div className = "mainContainer">
      <AboutMe/>
          <div className="container">
            <CoursesButton/>
            <ExperienceButton/>
            <ProjectsButton/>
            <ResumeButton/>
          </div>
    </div>
  );
}

export default MainPage;
