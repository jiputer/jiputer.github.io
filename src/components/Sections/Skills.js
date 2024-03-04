import "./sections.css";
import smiley1 from '../assets/smiley1.gif'

function Skills() {
  return (
    <div name="skills" id="skills" className = "sections"> 
        <div className="section">
            <header className="stdHeader"> Skills </header>
            <p className = "sectionText"> 
            As a developer, I possess a strong understanding of software design principles, 
            including SOLID, and have applied them effectively in various projects. 
            I am well-versed in Agile methodology, particularly Scrum, having successfully employed it 
            in the development of applications during my coursework. Furthermore, I have a solid theoretical 
            foundation in data science and machine learning, complemented by practical experience using Python. 
            Additionally I have experience in implementing ideas from academic papers and doing thorough research,
            for the best possible method for a task.
            Below, you'll find a compilation of programming languages, libraries, and frameworks that I have
             actively utilized.</p>
            <ul>
            <li> 
            <span>
            Java
            </span>
            </li>
            <li> 
            <span >
            C++
            </span>
            </li>
            <li>
            <span>
            C
            </span>
            </li>
            <li>
            <span>
            JavaScript/TypeScript (familliar with frameworks/libraries such as NodeJS, ReactJS, GraphQL, ApolloServer/Client)
            </span>
            </li>
            <li>
            <span>
            Python (familliar with NumPy, TensorFlow, scikit, Django, and http modules)
            </span>
            </li>
            <li>
            <span>
            HTML, CSS, R (with familliarity of tidyverse and other popular libraries)
            </span>
            </li>
            </ul>
            
        </div>
        <div className="section">
            <img src={smiley1} alt=":) ..." width="100%" height="500"/>
        </div>
    </div>

  );
}

export default Skills;
