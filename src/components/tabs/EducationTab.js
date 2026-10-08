import { smiley1 } from "../assets";
import { education, awards } from "../../content";

export default function EducationTab() {
  return (
    <>
      <div className="job">
        <div className="job-meta">
          <h3>{education.school}</h3>
          <p className="dates">{education.dates}</p>
        </div>
        <div>
          <p className="edu-degree">{education.degree}</p>
          <p className="edu-detail">{education.detail}</p>
        </div>
      </div>
      <h3 className="sub">Awards &amp; certifications</h3>
      <ul className="awards">
        {awards.map(([name, date]) => (
          <li key={name}><span>{name}</span><span className="dates">{date}</span></li>
        ))}
      </ul>
      <img className="tab-end" src={smiley1} alt="" width="56" height="56" />
    </>
  );
}
