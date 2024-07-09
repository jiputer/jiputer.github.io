import "./timeline.scss";
import timelineFlower from "../../assets/timelineFlower.png"
import finchlogo from "../../assets/finch_logo.png"
import utorontologo from "../../assets/uoftlogo.png"
import qnxlogo from "../../assets/qnx.png"
import methackslogo from "../../assets/methacks_logo.jpg"


function Timeline() {
  return (
	<div class="timeline">

	<div class="timeline-event">
		<img src={timelineFlower} alt=":)" class="timeline-event-icon" />
            
		<div class="timeline-event-copy">
            <div ><img src={utorontologo} width="40%" alt="logo"></img></div>
		<p class="timeline-event-thumbnail">June 2024-present</p>
		<h3>University of Toronto </h3>
		<h4>Undergraduate Researcher</h4>
		<ul>
            <li> 
            <p >
            Researching, and developing models to estimate biomass through a phone camera.
            </p>
            </li>
            </ul>

		</div>
	</div>

	<div class="timeline-event">
		<img src={timelineFlower} alt=":)" class="timeline-event-icon" />
		<div class="timeline-event-copy">
            <div ><img src={finchlogo} width="25%" alt="logo"></img></div>
		<p class="timeline-event-thumbnail">  September 2023-present</p>
		<h3>University of Toronto - Aerospace Team</h3>
		<h4>Machine Learning Researcher</h4>
		<ul>
            <li> 
            <p >
            The Field Imaging Nanosatellite for Crop Residue Hyperspectral Mapping (FINCH)
            mission is a 3U CubeSat mission aimed at conducting technological research.
            As a data processing member of the FINCH mission, I researched models for 
            denoising and destriping hyperspectral images and developed a function to
            generate realistic stripes. This function is used to create synthetic images
            to train a model for destriping images captured by a hyperspectral camera.
            This work resulted in an academic paper presented at the SmallSat Conference 2024.

            </p>
            </li>
            </ul>
		</div>
            
	</div>

	<div class="timeline-event">
		<img src={timelineFlower} alt=":)" class="timeline-event-icon" />
		<div class="timeline-event-copy">
            <div ><img src={methackslogo} width="25%" alt="logo"></img></div>
		<p class="timeline-event-thumbnail">  September 2023-present</p>
		<h3> METHacks</h3>
		<h4>Hackathon Mentor</h4>
		<ul>
            <li> 
            <p>
            Assisted hackers in utilizing APIs like Cohere, React, GQL, Tensorflow and Mongoose, and helped 
            further develop their hackathon ideas. 
            </p>
            </li>
            </ul>
		</div>
	</div> 


	<div class="timeline-event">
		<img src={timelineFlower} alt=":)" class="timeline-event-icon" />
		<div class="timeline-event-copy">
            <div><img src={qnxlogo} width="50%" alt="logo"></img></div>
		<p class="timeline-event-thumbnail"> September 2021 - December 2021</p>
		<h3> Blackberry QNX</h3>
		<h4> Build Infrastructure Dev </h4>
		<ul>
            <li> 
            <p >
            Migrated a significant number of old Jenkins jobs 
            from virtual machines to docker containers which
            resulted in the ability to re-purpose storage and
            computer resources to facilitate system updates</p>
            </li>
            <li> 
            <p  >
            Wrote Python scripts to automate
            documentation of build containers and wrote
            shell scripts to execute the scripts, and to execute 
            build steps
            </p>
            </li>
            <li>
            <p >
            Replaced a crucial plug-in for Jenkins that was
            unreliable, using a REST API in Python 
            which was  implemented with a Jenkins job
            </p>
            </li>
            </ul>
		</div>
	</div>

</div>  
  );
}

export default Timeline;
