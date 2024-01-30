import "./Button.css"


function ButtonLink(props) {


  return (

      <div className="buttons" onClick={props.onClick}>
        <div className="container">
            <a href={props.link} className="btn effect04" rel="noreferrer" data-sm-link-text={props.text} ><span>{props.text}</span></a>
        </div>
      </div>

  );
}

export default ButtonLink;
