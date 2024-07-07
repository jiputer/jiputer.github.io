import LogosContainer from "./LogosContainer";
import "./sections.css";
import smiley3 from '../assets/smiley3.gif'
import ResumeButton from "../buttons/ResumeButton"

function Bio() {
  return (
    <div name="bio" id="bio" className = "sections"> 

        <div className="section">
          <header className="stdHeader"> About Me </header>
            
            <p className="sectionText">
                Hey, I am a university student from Toronto. 
                I'm currently studying Statistics, specializing in 
                machine learning at University of Toronto. Some of my main interests 
                include machine learning, data science, and full-stack development. </p>
            <ResumeButton/>
            <p className="sectionText"> 
                  As a developer, I possess a strong understanding of software design principles, 
                  including SOLID, and have applied them effectively in various projects. 
                  I am well-versed in Agile methodology, particularly Scrum, having successfully employed it 
                  in the development of applications during my coursework. Furthermore, I have a solid theoretical 
                  foundation in data science and machine learning, complemented by practical experience using Python. 
                  Additionally I have experience in implementing ideas from academic papers and doing thorough research,
                  for the best possible method for a task.
                  Below, you'll find a compilation of programming languages, libraries, and frameworks that I have
                  actively utilized.</p>


             <LogosContainer/>
        </div>
        <div className="section_image">
          <img src={smiley3} alt=":) ..."width="500em" height="500em" />
        </div>

    </div>

  );
}

export default Bio;
