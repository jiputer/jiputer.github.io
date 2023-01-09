import "../buttons/Button.css"
import "./navbar.css"

function NavBarButton({text, link}) {
  return (

      <div className="navButtons">
        <div className="navButtonContainer">
            <a href={link} className="navbarBtn effect04" rel="noreferrer" data-sm-link-text={text} target="_blank"><span>{text}</span></a>
        </div>
      </div>

  );
}

export default NavBarButton;
