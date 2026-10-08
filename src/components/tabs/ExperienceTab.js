import { smiley5 } from "../assets";
import { experience } from "../../content";

export default function ExperienceTab() {
  return (
    <div className="jobs">
      {experience.map((job) => (
        <article className="job" key={job.company + job.dates}>
          <div className="job-meta">
            <h3>{job.company}</h3>
            <p>{job.role}</p>
            <p className="dates">{job.dates}</p>
          </div>
          <ul>{job.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
        </article>
      ))}
      <img className="tab-end" src={smiley5} alt="" width="56" height="56" />
    </div>
  );
}
