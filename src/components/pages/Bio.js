import LogosContainer from "../sections/logoscontainer/LogosContainer";
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
            I am a highly skilled developer, machine learning engineer, and data scientist with a proven track record of
             delivering innovative solutions across diverse domains. My expertise spans distributed systems, 
             software design, and AGILE methodology, enabling me to navigate complex development challenges
              effectively. I specialize in data-driven models such as transformers, U-Nets, and diffusion models,
               applying them to solve intricate problems in natural language processing, computer vision, and image processing.

Certified in Fundamentals of Accelerated Computing with CUDA C/C++ by NVidia, 
I possess a comprehensive understanding of statistical learning algorithms, hardware design,
 and architecture. My proficiency in data science extends to Markov decision processes,
  stochastic processes, and regression models, enhancing my analytical capabilities for
   tackling sophisticated challenges. Additionally, I have valuable experience in
    conducting research, applying theoretical insights to practical applications and
     contributing to advancements in the field.            
 Below, you'll find a compilation of programming languages, tools, libraries, and frameworks
  that I have actively utilized..</p>


             <LogosContainer/>
        </div>
        <div className="section_image">
          <img src={smiley3} alt=":) ..."width="500em" height="500em" />
        </div>

    </div>

  );
}

export default Bio;
