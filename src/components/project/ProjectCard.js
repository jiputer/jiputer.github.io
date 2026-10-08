
// A card on the Projects tab. Links to the project's own page.
export default function ProjectCard({ p }) {
  const v = p.preview;
  return (
    <a className="card" href={"#/p/" + p.slug}>
      <div className="preview-wrap">
        {v.image ? (
          <img className="preview" src={v.image} alt="" loading="lazy" decoding="async" />
        ) : (
          <div className="preview tile" style={{ background: v.tile.bg }}>
            <img src={v.tile.art} alt="" />
          </div>
        )}
        {v.badge && <span className="badge">{v.badge}</span>}
        {v.play && <span className="play" aria-hidden="true">▶</span>}
      </div>
      <div className="card-body">
        <p className="tag">{p.tag}</p>
        <h3>{p.title}</h3>
        <p className="blurb">{p.text}</p>
        <p className="stack">{p.stack}</p>
      </div>
    </a>
  );
}
