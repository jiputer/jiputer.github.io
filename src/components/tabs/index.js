import ExperienceTab from "./ExperienceTab";
import ProjectsTab from "./ProjectsTab";
import EducationTab from "./EducationTab";

// The tabs on the home page, in order. To add a tab: create a component in this folder and add a line here.
export const TABS = [
  { id: "experience", label: "Experience", Component: ExperienceTab },
  { id: "projects", label: "Projects", Component: ProjectsTab },
  { id: "education", label: "Education", Component: EducationTab },
];
