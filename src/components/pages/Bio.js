import LogosContainer from "../sections/logoscontainer/LogosContainer";
import "./sections.css";
import {smiley3} from "../assets"
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
                include machine learning, data science, and full-stack development. Under this is a link to my resume. </p>
            <ResumeButton/>
            <p className="sectionText"> 
           A little about me,I’m a developer, machine learning engineer, and data scientist with a strong track 
           record in delivering innovative solutions. My expertise includes distributed systems, software design,
            and AGILE methodology, with a focus on data-driven models like transformers, U-Nets, and diffusion models 
            for NLP, computer vision, and image processing.

Certified in CUDA C/C++, I have a deep understanding of statistical learning, hardware design, and architecture. 
In my free time, I participate in game jams and enjoy various hobbies. 
Below are the programming languages, tools, and frameworks I’ve worked with.</p>


             <LogosContainer/>
        </div>
        <div className="section_image">
          <img src={smiley3} alt=":) ..."width="500em" height="500em" />
        </div>

    </div>

  );
}

export default Bio;
