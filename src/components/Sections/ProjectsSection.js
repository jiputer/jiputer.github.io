import "./sections.css";

function Projects() {
  return (
    <div id="Projects" className = "projects"> 
        <div className="project">
            <header className="stdHeader"> Projects </header>
            <header className="sectionTitle">Tabs ( Course Project, 2022) </header>
            <p className="sectionText">An application that was built using TypeScript.  </p>
            <a className="sectionText" href="https://github.com/jipperspippers/Tabs">Github Link</a>
            <header className="sectionTitle">Intelliverse (Hack The Valley 7, 2022)</header>
            <p className="sectionText">
              An application that was built using TypeScript.  </p>
            <a className="sectionText" href="https://github.com/jipperspippers/IntelliVerse">Github Link</a>
            <header className="sectionTitle">Discord Bot for Managing Schedules</header>
            <p className="sectionText">An application that was built using TypeScript. </p>
            <a className="sectionText" href="not available">Github Link</a>
            <header className="sectionTitle">Blood-Pressure Study</header>
            <p className="sectionText">An application that was built using TypeScript. </p>
            <a className="sectionText" href="not available">Github Link</a>
         </div>
         
    </div>

  );
}

export default Projects;
