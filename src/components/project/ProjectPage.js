import { useEffect } from "react";
import Media from "./Media";
import Timeline from "./Timeline";
import TechChips from "../ui/TechChips";
import { smiley1 } from "../assets";

const ext = { target: "_blank", rel: "noopener noreferrer" };

// The full page for one project, built from its entry in content/projects.js.
// Every section is optional. If a project has no `features`, no section is drawn.
export default function ProjectPage({ p }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = p.title + " · John Ma";
    return () => { document.title = "John Ma · Software Engineer"; };
  }, [p]);

  const media = p.media || [];
  // Projects with a timeline show their clips inside it. Others lead with the first item as a hero.
  const hero = !p.timeline && media[0] ? media[0] : null;
  const gallery = p.timeline ? [] : media.slice(hero ? 1 : 0);

  return (
    <article className="detail">
      <a className="back" href="#projects">← All projects</a>

      {p.wip && (
        <div className="wipbar" role="note">
          <strong>Work in progress</strong>
          <span>Still adding: {p.wip.join(" · ")}</span>
        </div>
      )}

      <p className="tag">{p.tag}</p>
      <h1 className="detail-title">{p.title}</h1>
      {p.team && <p className="team">{p.team}</p>}
      <p className="lede">{p.overview || p.text}</p>
      <TechChips stack={p.stack} />

      {hero && <Media m={hero} />}

      {p.features && (
        <section>
          <h2>What it does</h2>
          <dl className="features">
            {p.features.map(([title, text]) => (
              <div key={title}><dt>{title}</dt><dd>{text}</dd></div>
            ))}
          </dl>
        </section>
      )}

      {p.timeline && (
        <section>
          <h2>Tournament timeline</h2>
          <p className="muted">Click a half to watch it. Zoom with − / + or double-click, then drag to pan.</p>
          <Timeline stages={p.timeline} media={media} />
        </section>
      )}

      {gallery.length > 0 && (
        <section>
          <h2>Gallery</h2>
          <div className="gallery">{gallery.map((m) => <Media key={m.src} m={m} />)}</div>
        </section>
      )}

      {p.links && (
        <div className="actions">
          {p.links.map((l) => <a key={l.href} className="btn primary" href={l.href} {...ext}>{l.text}</a>)}
        </div>
      )}
      <div className="page-end">
        <img src={smiley1} alt="" width="64" height="64" />
        <a href="#projects">← Back to all projects</a>
      </div>
    </article>
  );
}
