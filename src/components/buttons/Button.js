import "./Button.css"

function ButtonLink({text, link}) {
  return (

      <div className="buttons">
        <div className="container">
            <a href={link} className="btn effect04" rel="noreferrer" data-sm-link-text={text} ><span>{text}</span></a>
        </div>
      </div>

  );
}

export default ButtonLink;
