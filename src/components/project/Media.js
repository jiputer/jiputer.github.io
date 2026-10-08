import ZoomVideo from "../ui/ZoomVideo";

// One image or video with its caption. Used in project galleries.
// Give `id` to make the element a scroll target (the timeline uses this).
export default function Media({ m, id }) {
  const isVideo = m.type === "video";
  return (
    <figure className="media" id={id}>
      {isVideo ? (
        <ZoomVideo src={m.src} smSrc={m.smSrc} poster={m.poster} label={m.title} />
      ) : (
        <a href={m.src} target="_blank" rel="noopener noreferrer">
          <img src={m.src} alt={m.caption || ""} loading="lazy" decoding="async" />
        </a>
      )}
      {(m.title || m.caption || m.color || m.note) && (
        <figcaption>
          {m.title && <strong>{m.title}</strong>}
          {m.opponent && <span>{m.opponent}</span>}
          {m.color && <span className={"pill " + m.color.toLowerCase()}>{m.color} robot</span>}
          {m.note && <span className="note">{m.note}</span>}
          {m.caption && <span className="note">{m.caption}</span>}
        </figcaption>
      )}
    </figure>
  );
}
