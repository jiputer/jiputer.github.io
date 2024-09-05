import "./icons.css"
import {itchio, GithubIcon, LinkedInIcon } from "../assets";

function IconBar() {
  return (
    <div className="bar">
      
      <div className="icons">
      <a  href="https://github.com/jiputer" >
      <img src={GithubIcon}className="icon" alt="GithubIcon" /></a>

      <a href = "https://www.linkedin.com/in/john-p-ma">
      <img src={LinkedInIcon} className="icon" alt="LinkedInIcon" /></a>

      <a href = "https://jiputer.itch.io/">
      <img src={itchio} className="icon" alt="itchio" /></a>
      </div>      
      </div>

  );
}

export default IconBar;
