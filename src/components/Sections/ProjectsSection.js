import "./sections.css";

function Projects() {
  return (
    <div name="projects" id="projects" className = "projects"> 
        <div   className="project">
            <header  className="stdHeader"> Projects </header>
            <header className="sectionTitle">Tabs ( Course Project, 2022) </header>
            <p className="sectionText">An application that was written in TypeScript using React-Native. It used a three-layer architecture and CI/CD pipeline was set up using Docker and self written tests. This app was made to help keep track of household appliances in use (ie, washing machine, stove ...), as well as household finance, groceries and chores that are needed to be done. More info on the stack is on the github. </p>
            <a className="sectionText" href="https://github.com/jipperspippers/Tabs">Github Link</a>
            <header className="sectionTitle">Intelliverse (Hack The Valley 7, 2022)</header>
            <p className="sectionText">
              Simillarly, to above, a three-layer architecture application written in TypeScript using React-Native, GraphQL, . Uses co:here API  </p>
            <a className="sectionText" href="https://github.com/jipperspippers/IntelliVerse">Github Link</a>
            <header className="sectionTitle">Discord Bot for Managing Schedules (github link not available yet)</header>
            <p className="sectionText">Written in Python, using Discord's API to manage schedules. Originally written for the fitness club to create roles/delete roles based on events that a member is attending. </p>
            <a className="sectionText" href="not available">Github Link</a>
            <header className="sectionTitle">Blood-Pressure Study (Course Project, 2021)</header>
            <p className="sectionText">A final project to study the correlated variables of SBP. Regression and outlier analysis was done in R with multiple techniques to showcase. </p>
            <a className="sectionText" href="not available">Github Link</a>
         </div>
         
    </div>

  );
}

export default Projects;
