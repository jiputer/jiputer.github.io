import "./logos.css";
import * as assets from "../../assets"

function LogosContainer() {
  return (
    <div class="logos_container">

      <div class="logos" id="data-science">
        <h2>Machine Learning / Data Science</h2>
        <div class="sectionLogo">
          <div class="logo-container">
            <img src={assets.python} alt="python" width="70" height="70" />
            <p>Python</p>
          </div>
          <div class="logo-container">
            <img src={assets.pytorch} alt="pytorch" width="140" height="70" />
            <p>PyTorch</p>
          </div>
          <div class="logo-container">
            <img src={assets.tensorflow} alt="tensorflow" width="70" height="70" />
            <p>TensorFlow</p>
          </div>
          <div class="logo-container">
            <img src={assets.numpylogo} alt="numpylogo" width="70" height="70" />
            <p>Numpy</p>
          </div>
          <div class="logo-container">
            <img src={assets.pandaslogo} alt="pandaslogo" width="140" height="70" />
            <p>Pandas</p>
          </div>
          <div class="logo-container">
            <img src={assets.rlogo} alt="R" width="70" height="70" />
            <p>R</p>
          </div>


        </div>
      </div>

      <div class="section" id="software-engineering">
        <h2>Dev-Ops / Software Engineering</h2>
        <div class="sectionLogo">
          <div class="logo-container">
            <img src={assets.c_icon} alt="c_icon" width="70" height="70" />
            <p>C</p>
          </div>
          <div class="logo-container">
            <img src={assets.java} alt="java" width="70" height="70" />
            <p>Java</p>
          </div>
          <div class="logo-container">
            <img src={assets.git_logo} alt="git_logo" width="70" height="70" />
            <p>Git</p>
          </div>
          <div class="logo-container">
            <img src={assets.jenkins}alt="jenkins"  width="70" height="70" />
            <p>Jenkins</p>
          </div>
          <div class="logo-container">
            <img src={assets.docker} alt="docker"width="70" height="70" />
            <p>Docker</p>
          </div>
          <div class="logo-container">
            <img src={assets.bashlogo} alt="Bash" width="70" height="70" />
            <p>Bash</p>
          </div>
          <div class="logo-container">
            <img src={assets.linuxlogo} alt="Linux" width="70" height="70" />
            <p>Linux</p>
          </div>
        </div>
     
      </div>

      <div class="section" id="web-dev">
        <h2>Web Development</h2>
        <div class="sectionLogo">
          <div class="logo-container">
            <img src={assets.javascript} alt="javascript" width="70" height="70" />
            <p>JavaScript</p>
          </div>
          <div class="logo-container">
            <img src={assets.nodejs} alt="nodejs" width="70" height="70" />
            <p>Node.js</p>
          </div>
          <div class="logo-container">
            <img src={assets.typescript_logo} alt="typescript" width="70" height="70" />
            <p>TypeScript</p>
          </div>
          <div class="logo-container">
            <img src={assets.reactlogo} alt="react" width="70" height="70" />
            <p>React</p>
          </div>
          <div class="logo-container">
            <img src={assets.mongodblogo} alt="mongodb" width="70" height="70" />
            <p>MongoDB</p>
          </div>
          <div class="logo-container">
            <img src={assets.postgresql_logo} alt="postgresql" width="70" height="70" />
            <p>PostgreSQL</p>
          </div>
          <div class="logo-container">
            <img src={assets.graphql_logo} alt="graphql_logo" width="150" height="70" />
            <p>GraphQL</p>
          </div>
          <div class="logo-container">
            <img src={assets.css} alt="css" width="70" height="70" />
            <p>CSS</p>
          </div>
          <div class="logo-container">
            <img src={assets.html} alt="html" width="70" height="70" />
            <p>HTML</p>
          </div>
        </div>

      </div>

   </div>

  );
}

export default LogosContainer;
