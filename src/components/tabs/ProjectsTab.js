import ProjectCard from "../project/ProjectCard";
import { projects, links } from "../../content";

const ext = { target: "_blank", rel: "noopener noreferrer" };

export default function ProjectsTab() {
  return (
    <>
      <div className="projects">
        {projects.map((p) => <ProjectCard key={p.slug} p={p} />)}
      </div>
      <p className="more-line">
        More on <a href={links.github} {...ext}>GitHub</a> and <a href={links.itch} {...ext}>itch.io</a>.
      </p>
    </>
  );
}
