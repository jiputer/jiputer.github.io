import "./sections.css";
import flower3 from '../assets/flower3.gif'
function Projects() {
  return (
    <div name="projects" id="projects" className = "sections"> 
        <div   className="section">
            <header  className="stdHeader"> Projects </header>
            
            <header className="sectionTitle"> Drone detection, tracking and movement prediction model ( Course Project, 2023) </header>
            <p className="sectionText">Written in python using TensorFlow and Pytorch. Wrote a YOLOv8 model from scratch, and used an LSTM to predict a sequence of positions the drones are at. </p>
            <a className="sectionText" href="https://github.com/jipperspippers/">Github Link </a>
            <header className="sectionTitle"> Optical chemical structure recoginition ( Self Project, 2023-2024) </header>
            <p className="sectionText"> Using a UNet and LSTM to predict the chemical structure drawn</p>
            <header className="sectionTitle">  Crowd Crash Simulator (Group Project, 2023) [PAUSED] </header>
            <p className="sectionText"> A web app to simulate crowd crashes based on blue print of maps given. Originally for a hackathon</p>
            <header className="sectionTitle"> Tetris AI ( Self Project, 2023-2024) </header>
            <p className="sectionText"> Using CNN and a LSTM to predict the next block for the current state of tetris</p>
            <a className="sectionText" href="https://github.com/jipperspippers/">Github Link Upon Request</a>
            <header className="sectionTitle">Tabs ( Course Project, 2022) </header>
            <p className="sectionText">An application that was written in TypeScript using React-Native. It used a three-layer architecture and CI/CD pipeline was set up using Docker and self written tests. This app was made to help keep track of household appliances in use (ie, washing machine, stove ...), as well as household finance, groceries and chores that are needed to be done. More info on the stack is on the github. </p>
            <a className="sectionText" href="https://github.com/jipperspippers/Tabs">Github Link</a>
            <header className="sectionTitle">Intelliverse (Hack The Valley 7, 2022)</header>
            <p className="sectionText">
              Simillarly, to above, a three-layer architecture application written in TypeScript using React-Native, GraphQL, . Uses co:here API  </p>
            <a className="sectionText" href="https://github.com/jipperspippers/IntelliVerse">Github Link</a>
            <header className="sectionTitle">Discord Bot for Managing Schedules [ABORTED]</header>
            <p className="sectionText">Written in Python, using Discord's API to manage schedules. Originally written for the fitness club to create roles/delete roles based on events that a member is attending. Issue is the python Discord API has not implemented certain features for this to work, and requires a wait for the PR.  </p>
            <a className="sectionText" href="not available">Github Link</a>
            <header className="sectionTitle">Blood-Pressure Study (Course Project, 2021)</header>
            <p className="sectionText">A final project to study the correlated variables of SBP. Regression and outlier analysis was done in R with multiple techniques to showcase. </p>
            <a className="sectionText" href="not available">Github Link</a>
         </div>
         <div className="section">
            <img src={flower3} alt=":) ..." width="80%" height="40%" />
        </div>
    </div>

  );
}

export default Projects;
