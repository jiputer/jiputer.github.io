import "./sections.css";
import flower3 from '../assets/flower3.gif'
import '../sections/project/projects.css';
import ProjectCard  from "../sections/project/ProjectCard";
import galaxiabound from '../assets/galaxiabound.png'

const projects = [
  {
    title: "Galaxia Bound",
    description: "Browser game made in Unity. Made along with Anthony Qin (qin2500), and Klein Harrigan (KleinKodes)",
    link: "https://qin2500.itch.io/galaxia-bound",
    image: {galaxiabound},
    linkText: "Link to the game (or you can play at the bottom of the 🤠 page)"
  },
  {
    title: "Beyond the Visible: Jointly Attending to Spectral and Spatial Dimensions with HSI-Diffusion for the FINCH Spacecraft",
    description: "Academic paper for the SmallSat Conference, 2024",
    link: "https://paperswithcode.com/paper/beyond-the-visible-jointly-attending-to",
    linkText: "Link to the Paper"
    
  },
  {
    title: "Tetris in MIPS ",
    description: "For a course, written in MIPs using assembly knowledge and game rendering techniques for a smooth gameplay and modifiable code.",
    link: "https://github.com/jiputer/",
    linkText: "Available upon request, repo is not public due to plagiarism concerns"
  },
  {
    title: "Drone detection, tracking and movement prediction model",
    description: "Created the model using TensorFlow and Pytorch. Wrote a YOLOv8 model from scratch, and used an LSTM to predict a sequence of positions the drones are at.",
    link: "https://github.com/jiputer/",
    linkText: "Available upon request but, currently being edited for a more cleaner representation of results...."
  },

  {
    title: "Tabs",
    description: "A three-layer architecture application that was written in TypeScript using React-Native. It used a three-layer architecture and CI/CD pipeline was set up using Docker and self written tests.",
    link: "https://github.com/jiputer/Tabs",
    linkText: "Github Link"
  },
  {
    title: "Intelliverse ",
    description: "Written for Hack The Valley 7, a three-layer architecture application written in TypeScript using React-Native, GraphQL. Modifiable backend that can be later used with different frontend technologies. Won Top 3 hacks, Best Discovery Hack and Best Use of Github awards.",
    link: "https://github.com/jiputer/IntelliVerse",
    linkText: "Github Link"
  },
  {
    title: "Remaining Battery Life Data Analysis, Regression Model ",
    description: "A datathon analysis task to study the correlated variables of remaining battery life. Regression and outlier analysis was done in python using jupyter notebook with multiple techniques to showcase. Placed in the Top 3 in the competition.",
    link: "https://github.com/jiputer/RemainingBattery",
    linkText: "Github Link"
  },
  {
    title: "Mock Terminal ",
    description: "A final project to implement software design principles and techniques, received a perfect mark on the project. Written in Java.",
    link: "not available",
    linkText: "Available upon request, repo is not public due to plagiarism concerns"
  },
  {
    title: "Blood-Pressure Data Analysis, Regression Model",
    description: "A final project to study the correlated variables of SBP. Regression and outlier analysis was done in R with multiple techniques to showcase.",
    link: "not available",
    linkText: "Github Link"
  }
];

const projectBacklog = [
  {
    title: "Optical chemical structure recoginition (Self Project, 2023)",
    description: "Using a UNet and LSTM to predict the chemical structure drawn",
    link: "",
    linkText: "Have yet to train and analyze"
  },
  {
    title: "Tetris AI (Self Project, 2023-2024)",
    description: "Using CNN and a LSTM to predict the next block for the current state of tetris",
    link: "https://github.com/jiputer/",
    linkText: "Github Link Upon Request"
  },
  {
    title: "Crowd Crash Simulator (Group Project, 2023)",
    description: "A web app to simulate crowd crashes based on blue print of maps given. Originally for a hackathon",
    link: "",
    linkText: ""
  },
  {
    title: "Discord Bot for Managing Schedules [ABORTED]",
    description: "Written in Python, using Discord's API to manage schedules. Originally written for the fitness club to create roles/delete roles based on events that a member is attending.",
    link: "not available",
    linkText: "Github Link"
  }
];

const Projects = () => {
  return (
    <div className="section_projects">
    <div className="section_projects_inner">
      <h2>Finished Projects</h2>
    <div className="projectsContainer">
      
      {projects.map((project, index) => (
        
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}
      
    </div>
      <h2> Project Backlog</h2>
      <div className="projectsContainer">
      
      {projectBacklog.map((project, index) => (
        
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
    </div>
    <div><img src={flower3} /></div>
    </div>
  );
};

export default Projects;
