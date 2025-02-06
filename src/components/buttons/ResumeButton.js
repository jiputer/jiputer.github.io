import "./resumebutton.scss";

function ResumeButton() {
  return (
<div id="container">
  <button class="learn-more">
    <span class="circle" aria-hidden="true">
      <span class="icon arrow"></span>
    </span>
    <a href='https://jiputer.github.io/John_M_Resume.pdf'
    class="button-text">
    <span>Resume</span> </a>
  </button>
</div>

  );
}

export default ResumeButton;
