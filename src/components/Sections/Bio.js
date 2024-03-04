import "./sections.css";
import smiley3 from '../assets/smiley3.gif'

function Bio() {
  return (
    <div name="bio" id="bio" className = "sections"> 

        <div className="section">
          <header className="stdHeader"> About Me </header>
            <p className="sectionText">Hey, I am a university student from Toronto. 
                I'm currently studying Statistics, specializing in 
                machine learning at University of Toronto. Some of my main interests 
                include machine learning, data science, and full-stack development. </p>

        </div>
        <div className="section">
          <img src={smiley3} alt=":) ..."width="70%" height="70%" />
        </div>

    </div>

  );
}

export default Bio;
