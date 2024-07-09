import "./sections.css";
import {flower1} from '../assets'
import Timeline from "../sections/timeline/Timeline";


function Experience() {
  return (
    

    <div  name="experience" id="experience" className = "sections"> 
        <Timeline /> 
        
        <div className="section_image">
            <img src={flower1} alt=":) ..." width="500em" height="500em"/>
        </div>
    </div>

  );
}

export default Experience;
