import "./style.scss";
import timelineFlower from "./timelineFlower.png"

function Timeline() {
  return (
	<div class="timeline">

	<div class="timeline-event">
		<img src={timelineFlower} alt=":)" class="timeline-event-icon" />
		<div class="timeline-event-copy">
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
		<p class="timeline-event-thumbnail">  September 2023-present</p>
		<h3>University of Toronto - Aerospace Team</h3>
		<h4>Machine Learning Researcher</h4>
		<ul>
            <li> 
            <p >
            As a data processing member, I researched models in denoising and destriping hyperspectral images, 
            and developed a function to generate similar types of stripes that 
            would occur in real scenearios. This function is used to create synthetic 
            images to help train a model to destripe such images from a hyperspectral camera. Resulted in 
            an academic paper presented at SmallSat Conference 2024.

            </p>
            </li>
            </ul>
		</div>
	</div>

	<div class="timeline-event">
		<img src={timelineFlower} alt=":)" class="timeline-event-icon" />
		<div class="timeline-event-copy">
		<p class="timeline-event-thumbnail"> May 2023</p>
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
