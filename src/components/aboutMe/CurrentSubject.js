
import Bio from "../sections/Bio";
import Projects from "../sections/ProjectsSection";
import Experience from "../sections/Experience";
import Skills from "../sections/Skills";

function CurrentSubject({content}) {
  const renderContent = (content) => {
    switch (content) {
      case 'bio':
        return <Bio/>;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      default:
        return <Bio />; // or any other default content or nothing
    }
  };

  return <div className="subjectsContainer">{renderContent(content)}</div>;
}

export default CurrentSubject;
