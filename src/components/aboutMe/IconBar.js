import "./icons.css"
import GithubIcon from "./github.svg"
import LinkedInIcon from "./linkedin.svg"

function IconBar() {
  return (
    <div className="bar">
      
      <div className="icons">
      <a  href="https://github.com/jipperspippers" >
      <img src={GithubIcon}className="icon" alt="GithubIcon" /></a>

      <a href = "https://www.linkedin.com/in/john-p-ma">
      <img src={LinkedInIcon} className="icon" alt="LinkedInIcon" /></a>
      </div>
    </div>
  );
}

export default IconBar;
