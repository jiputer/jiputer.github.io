import "./resumebutton.scss";

function ResumeButton() {
  return (
<div id="container">
  <button class="learn-more">
    <span class="circle" aria-hidden="true">
      <span class="icon arrow"></span>
    </span>
    <a href="https://docs.google.com/document/d/1sUPe8bQDaqvuTIrh3dt37ciO_BN3zJ20lhItL9QA4Uk/edit?usp=sharing" 
    class="button-text">
    <span>Resume</span> </a>
  </button>
</div>

  );
}

export default ResumeButton;
