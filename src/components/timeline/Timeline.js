import "./style.scss";
import timelineFlower from "./timelineFlower.png"

function Timeline() {
  return (
	<div class="timeline">
	<div class="timeline-event">
		<img src={timelineFlower} class="timeline-event-icon" />
		<div class="timeline-event-copy">
		<p class="timeline-event-thumbnail">April 2011 - heute</p>
		<h3>Geil,Danke! GmbH</h3>
		<h4>Geschäftsführerin eines Web-Studios</h4>
		<p><strong>Schwerpunkt: Frontend-Entwicklung</strong>Entwickeln von anspruchsvollen, animierten, responsive und adaptive Webseiten mit HTML5, SCSS, jQuery; für alle Browser, optimiert für Desktop, Notebook, Smartphones und Tablets (iOS, Android, Windows).</p>
		<p><strong>Projektmanagement mit Scrum</strong>Ständiges Verbessern des agilen Entwicklungsprozesses beispielsweise durch Grunt, Yeoman, GIT, JIRA und BrowserStack.</p>
		</div>
	</div>
	<div class="timeline-event">
		<img src={timelineFlower} class="timeline-event-icon" />
		<div class="timeline-event-copy">
		<p class="timeline-event-thumbnail">November 2009 - März 2011</p>
		<h3>Freelancer</h3>
		<h4>Designer und Autor</h4>
		<p>Konzeption, Design und Produktion von Digitalen Magazinen mit InDesign, der Adobe Digital Publishing Suite und HTML5. Co-Autorin der Fachbücher "Digitales Publizieren für Tablets" und "Adobe Digital Publishing Suite" erschienen im dpunkt.verlag.</p>
		</div>
	</div>
	<div class="timeline-event">
		<img src={timelineFlower} class="timeline-event-icon" />
		<div class="timeline-event-copy">
		<p class="timeline-event-thumbnail">April 2011 - heute</p>
		<h3>konplan gmbh</h3>
		<h4>IT-Consultant</h4>
		<p><strong>Systemarchitektur, Consulting</strong>Konzeption und Modellierung von Systemen und APIs für Digital Publishing und Entitlement nach SOA</p>
		</div>
	</div>
</div>  
  );
}

export default Timeline;
