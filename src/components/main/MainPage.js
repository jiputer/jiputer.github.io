import "./MainPage.css"
import { CoursesButton, ExperienceButton, GithubButton, LinkedInButton, ProjectsButton, ResumeButton } from "../buttons";
import AboutMe from "../aboutMe/AboutMe";

function MainPage() {
  return (


<div class = "mainContainer">
  <AboutMe/>
      <div class="container">
        <GithubButton/>
        <CoursesButton/>
        <ExperienceButton/>
        <LinkedInButton/>
        <ProjectsButton/>
        <ResumeButton/>
      </div>
    </div>
  );
}

export default MainPage;
