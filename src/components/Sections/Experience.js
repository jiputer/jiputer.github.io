import "./sections.css";
import flower1 from '../assets/flower1.gif'
import Timeline from "../timeline/Timeline";
function Experience() {
  return (
   
    <div  name="experience" id="experience" className = "sections"> 
       
        <div  className="section">
            <Timeline /> 
            <header class="stdHeader"> Experience </header>
            <header class="sectionTitle"> Undergraduate Researcher (University of Toronto, 2024-present) </header>
            <ul>
            <li> 
            <p className="sectionText">
            Researching, and developing models to estimate biomass through a phone camera.
            </p>
            </li>
            </ul>
            <header class="sectionTitle"> Machine Learning Researcher (University of Toronto - Aerospace Team, September 2023-present) </header>
            <ul>
            <li> 
            <p className="sectionText">
            As a data processing member, I researched models in denoising and destriping hyperspectral images, 
            and developed a function to generate similar types of stripes that 
            would occur in real scenearios. This function is used to create synthetic 
            images to help train a model to destripe such images from a hyperspectral camera. Resulted in 
            an academic paper presented at SmallSat Conference 2024.

            </p>
            </li>
            </ul>
            <header class="sectionTitle">Hackathon Mentor (METHacks, 2023) </header>
            <ul>
            <li> 
            <p className="sectionText">
            Assisted hackers in utilizing APIs like Cohere, React, GQL, Tensorflow and Mongoose, and helped 
            further develop their hackathon ideas. 
            </p>
            </li>
            </ul>
            <header class="sectionTitle">Build Infrastructure Dev (Blackberry QNX, 2021) </header>
            <ul>
            <li> 
            <p className="sectionText">
            Migrated a significant number of old Jenkins jobs 
            from virtual machines to docker containers which
            resulted in the ability to re-purpose storage and
            computer resources to facilitate system updates</p>
            </li>
            <li> 
            <p className="sectionText" >
            Wrote Python scripts to automate
            documentation of build containers and wrote
            shell scripts to execute the scripts, and to execute 
            build steps
            </p>
            </li>
            <li>
            <p className="sectionText">
            Replaced a crucial plug-in for Jenkins that was
            unreliable, using a REST API in Python 
            which was  implemented with a Jenkins job
            </p>
            </li>
            </ul>
        </div>
        <div className="section">
            <img src={flower1} alt=":) ..." width="100%" height="500"/>
        </div>
    </div>

  );
}

export default Experience;
