import "./sections.css";
import flower3 from '../assets/flower3.gif'
function Projects() {
  
  return (
    <div name="projects" id="projects" className = "sections"> 
        <div   className="section">
            <header  className="stdHeader"> Finished Projects </header>

            <header className="sectionTitle"> Galaxia Bound (ScoreSpace 30 [Game Jam], June 2024) </header>
            <p className="sectionText"> Browser game made in Unity. </p>
            <a className="sectionText" href="https://github.com/jiputer/" >  Link to the game (or you can play at the bottom of the 🤠 page) </a>

            <header className="sectionTitle"> 3D Diffusion Model for Destriping and Denoising Hyperspectral images (University of Toronto - Aerospace Team (UTAT), June 2024) </header>
            <p className="sectionText"> Academic paper for the SmallSat Conference, 2024</p>
            <a className="sectionText" href="https://paperswithcode.com/paper/beyond-the-visible-jointly-attending-to" >  Link to the Paper</a>

            <header className="sectionTitle"> Tetris in Assembly ( Course Project, 2024) </header>
            <p className="sectionText">Written in MIPs using assembly knowledge and game rendering techniques for a smooth gameplay and modifiable code.  </p>
            <a className="sectionText" href="https://github.com/jiputer/"> Available upon request, repo is not public due to plagiarism concerns</a>
            
            <header className="sectionTitle"> Drone detection, tracking and movement prediction model ( Course Project, 2023) </header>
            <p className="sectionText">Written in python using TensorFlow and Pytorch. Wrote a YOLOv8 model from scratch, and used an LSTM to predict a sequence of positions the drones are at. Project has been submitted and marked, however wanting to improve it I have not made it public yet.</p>
            <a className="sectionText" href="https://github.com/jiputer/"> Available upon request but, currently being edited for a more cleaner representation of results....</a>

            <header className="sectionTitle">Remaining Battery life Data Analysis (DS3 Datathon, 2022)</header>
            <p className="sectionText">A datathon analysis task to study the correlated variables of remaining battery life. Regression and outlier analysis was done in python using jupyter notebook with multiple techniques to showcase. Placed in the Top 3 in the competition. </p>
            <a className="sectionText" href="https://github.com/jiputer/RemainingBattery">Github Link</a>
            
            <header className="sectionTitle">Tabs ( Course Project, 2022) </header>
            <p className="sectionText">A three-layer architecture application that was written in TypeScript using React-Native. It used a three-layer architecture and CI/CD pipeline was set up using Docker and self written tests. This app was made to help keep track of household appliances in use (ie, washing machine, stove ...), as well as household finance, groceries and chores that are needed to be done. More info on the stack is on the github. </p>
            <a className="sectionText" href="https://github.com/jiputer/Tabs">Github Link</a>
            <header className="sectionTitle">Intelliverse (Hack The Valley 7, 2022)</header>
            <p className="sectionText">
              Simillarly, to the Tabs project, a three-layer architecture application written in TypeScript using React-Native, GraphQL. Modifiable backend that can be later used with different frontend technologies. Uses co:here API for its sentiment detection feature. Won multiple awards at Hack The Valley 7 for this project.  </p>
            <a className="sectionText" href="https://github.com/jiputer/IntelliVerse">Github Link</a>
            
            <header className="sectionTitle"> Mock terminal (Course Project, 2021)</header>
            <p className="sectionText">A final project to implement software design principles and techniques, received a perfect mark on the project. Written in Java. </p>
            <a className="sectionText" href="not available">Available upon request, repo is not public due to plagiarism concerns</a>
            <header className="sectionTitle">Blood-Pressure Data Analysis (Course Project, 2021)</header>
            <p className="sectionText">A final project to study the correlated variables of SBP. Regression and outlier analysis was done in R with multiple techniques to showcase. </p>
            <a className="sectionText" href="not available">Github Link</a>

            <header className="stdHeader"> Project Backlog </header>
            <p className="sectionText"> In order of priority </p>
            <header className="sectionTitle"> Optical chemical structure recoginition ( Self Project, 2023) </header>
            <p className="sectionText"> Using a UNet and LSTM to predict the chemical structure drawn</p>
            <a className="sectionText"> Have yet to train and analyze</a>
            <header className="sectionTitle"> Tetris AI ( Self Project, 2023-2024) </header>
            <p className="sectionText"> Using CNN and a LSTM to predict the next block for the current state of tetris</p>
            <a className="sectionText" href="https://github.com/jiputer/">Github Link Upon Request</a>
            <header className="sectionTitle">  Crowd Crash Simulator (Group Project, 2023) </header>
            <p className="sectionText"> A web app to simulate crowd crashes based on blue print of maps given. Originally for a hackathon</p>
           
            <header className="sectionTitle">Discord Bot for Managing Schedules [ABORTED]</header>
            <p className="sectionText">Written in Python, using Discord's API to manage schedules. Originally written for the fitness club to create roles/delete roles based on events that a member is attending. Issue is the python Discord API has not implemented certain features for this to work, and requires a wait for the PR.  </p>
            <a className="sectionText" href="not available">Github Link</a>
         </div>
         <div className="section">
            <img src={flower3} alt=":) ..." width="80%" height="40%" />
        </div>
    </div>

  );
}

export default Projects;
