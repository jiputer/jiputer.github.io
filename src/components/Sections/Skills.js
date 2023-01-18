import "./sections.css";

function Skills() {
  return (
    <div id="Experience" className = "projects"> 
        <div className="project">
            <header class="stdHeader"> Experience </header>
            <header class="sectionTitle">Build Infrastructure Dev (Blackberry QNX, 2021) </header>
            <ul>
            <li> 
            <span>
            Migrated a significant number of old Jenkins jobs 
            from virtual machines to docker containers which
            resulted in the ability to re-purpose storage and
            computer resources to facilitate system updates</span>
            </li>
            <li> 
            <span >
            Wrote Python scripts to automate
            documentation of build containers and wrote
            shell scripts to execute the scripts, and to execute 
            build steps
            </span>
            </li>
            <li>
            <span>
            Replaced a crucial plug-in for Jenkins that was
            unreliable, using a REST API in Python 
            which was  implemented with a Jenkins job
            </span>
            </li>
            </ul>
        </div>
         
    </div>

  );
}

export default Skills;
