import Bio from "../sections/Bio";
import Projects from "../sections/ProjectsSection";
import Experience from "../sections/Experience";

import Extras from "../sections/Extras";

function CurrentSubject({content}) {
  const renderContent = (content) => {
    switch (content) {
      case 'bio':
        return <Bio/>;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;

      case 'extras':
        return <Extras />
      default:
        return <Bio />; // or any other default content or nothing
    }
  };

  return <div className="subjectsContainer">{renderContent(content)}</div>;
}

export default CurrentSubject;
