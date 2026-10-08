import { python, reactlogo, typescript_logo, nodejs, docker, graphql_logo, pytorchicon, unity, csharp, javascript, linuxlogo, jenkins, mongodblogo, tensorflow } from "../assets";

// Logos for the tech named in a project's `stack` (split on "·"). Names with no logo here just show as text.
// To add one: import the logo from components/assets and add a line below.
const LOGOS = {
  "python": python, "react": reactlogo, "react native": reactlogo, "typescript": typescript_logo,
  "node.js": nodejs, "docker": docker, "graphql": graphql_logo, "pytorch": pytorchicon,
  "unity": unity, "c#": csharp, "javascript": javascript, "linux": linuxlogo,
  "jenkins": jenkins, "mongodb": mongodblogo, "tensorflow": tensorflow,
};

export default function TechChips({ stack }) {
  return (
    <ul className="chips">
      {stack.split("·").map((t) => t.trim()).filter(Boolean).map((name) => (
        <li key={name} className="chip">
          {LOGOS[name.toLowerCase()] && <img src={LOGOS[name.toLowerCase()]} alt="" width="16" height="16" />}
          {name}
        </li>
      ))}
    </ul>
  );
}
