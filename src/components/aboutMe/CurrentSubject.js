
import Bio from "../sections/Bio";
import Projects from "../sections/ProjectsSection";
import Experience from "../sections/Experience";
import Skills from "../sections/Skills";
import Music from "../sections/Music";

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
      case 'music':
        return <Music />
      default:
        return <Bio />; // or any other default content or nothing
    }
  };

  return <div className="subjectsContainer">{renderContent(content)}</div>;
}

export default CurrentSubject;
