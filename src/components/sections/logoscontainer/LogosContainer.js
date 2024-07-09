import "./logos.css";
import jenkins from '../../assets/jenkins.png'
import pytorch from '../../assets/pytorch.png'
import nodejs from '../../assets/nodejs.png'
import reactlogo from '../../assets/react.png'
import mongodblogo from '../../assets/mongodb.png'
import tensorflow from '../../assets/tensorflow.png'
import javascript from '../../assets/javascript.png'
import java from '../../assets/java-icon.png'
import c_icon from '../../assets/c_icon.png'
import css from '../../assets/css.png'
import html from '../../assets/html.png'
import python from '../../assets/python.svg'
import typescript_logo from '../../assets/typescript.png'
import docker from '../../assets/docker.png'
import git_logo from '../../assets/git.png'
import postgresql_logo from '../../assets/postgreSQL.png'
import graphql_logo from '../../assets/graphql_logo.png'
import rlogo from '../../assets/rlogo.png'
import linuxlogo from '../../assets/linux.png'
import numpylogo from '../../assets/numpy.png'
import pandaslogo from '../../assets/pandas.png'
import bashlogo from '../../assets/bash.png'

function LogosContainer() {
  return (
    <div class="logos_container">

      <div class="logos" id="data-science">
        <h2>Machine Learning / Data Science</h2>
        <div class="sectionLogo">
          <div class="logo-container">
            <img src={python} alt="python" width="70" height="70" />
            <p>Python</p>
          </div>
          <div class="logo-container">
            <img src={pytorch} alt="pytorch" width="140" height="70" />
            <p>PyTorch</p>
          </div>
          <div class="logo-container">
            <img src={tensorflow} alt="tensorflow" width="70" height="70" />
            <p>TensorFlow</p>
          </div>
          <div class="logo-container">
            <img src={numpylogo} alt="numpylogo" width="70" height="70" />
            <p>Numpy</p>
          </div>
          <div class="logo-container">
            <img src={pandaslogo} alt="pandaslogo" width="140" height="70" />
            <p>Pandas</p>
          </div>
          <div class="logo-container">
            <img src={rlogo} alt="R" width="70" height="70" />
            <p>R</p>
          </div>


        </div>
      </div>

      <div class="section" id="software-engineering">
        <h2>Dev-Ops / Software Engineering</h2>
        <div class="sectionLogo">
          <div class="logo-container">
            <img src={c_icon} alt="c_icon" width="70" height="70" />
            <p>C</p>
          </div>
          <div class="logo-container">
            <img src={java} alt="java" width="70" height="70" />
            <p>Java</p>
          </div>
          <div class="logo-container">
            <img src={git_logo} alt="git_logo" width="70" height="70" />
            <p>Git</p>
          </div>
          <div class="logo-container">
            <img src={jenkins}alt="jenkins"  width="70" height="70" />
            <p>Jenkins</p>
          </div>
          <div class="logo-container">
            <img src={docker} alt="docker"width="70" height="70" />
            <p>Docker</p>
          </div>
          <div class="logo-container">
            <img src={bashlogo} alt="Bash" width="70" height="70" />
            <p>Bash</p>
          </div>
          <div class="logo-container">
            <img src={linuxlogo} alt="Linux" width="70" height="70" />
            <p>Linux</p>
          </div>
        </div>
     
      </div>

      <div class="section" id="web-dev">
        <h2>Web Development</h2>
        <div class="sectionLogo">
          <div class="logo-container">
            <img src={javascript} alt="javascript" width="70" height="70" />
            <p>JavaScript</p>
          </div>
          <div class="logo-container">
            <img src={nodejs} alt="nodejs" width="70" height="70" />
            <p>Node.js</p>
          </div>
          <div class="logo-container">
            <img src={typescript_logo} alt="typescript" width="70" height="70" />
            <p>TypeScript</p>
          </div>
          <div class="logo-container">
            <img src={reactlogo} alt="react" width="70" height="70" />
            <p>React</p>
          </div>
          <div class="logo-container">
            <img src={mongodblogo} alt="mongodb" width="70" height="70" />
            <p>MongoDB</p>
          </div>
          <div class="logo-container">
            <img src={postgresql_logo} alt="postgresql" width="70" height="70" />
            <p>PostgreSQL</p>
          </div>
          <div class="logo-container">
            <img src={graphql_logo} alt="graphql_logo" width="150" height="70" />
            <p>GraphQL</p>
          </div>
          <div class="logo-container">
            <img src={css} alt="css" width="70" height="70" />
            <p>CSS</p>
          </div>
          <div class="logo-container">
            <img src={html} alt="html" width="70" height="70" />
            <p>HTML</p>
          </div>
        </div>

      </div>

   </div>

  );
}

export default LogosContainer;
