import { useState } from "react";
import ZoomVideo from "../ui/ZoomVideo";

// A simple vertical timeline. `stages` come from a project's `timeline` field:
//   { name, vs, result?, note?, clips: [indexes into the project's media] }
// Each clip is a row that starts with which robot you were ("Red robot · 1st half"). Click it to open the video (nothing loads until then).
export default function Timeline({ stages, media }) {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <ol className="timeline">
      {stages.map((s) => (
        <li key={s.name} className="stage">
          <div className="stage-head">
            <h3>{s.name}</h3>
            {s.vs && <span className="vs">vs {s.vs}</span>}
            {s.result && <span className="result">{s.result}</span>}
          </div>
          {s.note && <p className="note">{s.note}</p>}

          {s.clips.map((i) => {
            const m = media[i];
            const half = m.title.split("·")[1]?.trim() || m.title;
            const isOpen = open === i;
            return (
              <div key={i} className={"clip" + (isOpen ? " open" : "")}>
                <button type="button" className="clip-btn" aria-expanded={isOpen} onClick={() => toggle(i)}>
                  <span className={"dot " + (m.color || "").toLowerCase()} aria-hidden="true" />
                  <span className="clip-title">{m.color ? m.color + " robot · " : ""}{half}</span>
                  <span className="clip-caret" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="clip-body">
                    <ZoomVideo src={m.src} smSrc={m.smSrc} poster={m.poster} label={m.title} />
                    {m.note && <p className="note">{m.note}</p>}
                  </div>
                )}
              </div>
            );
          })}
        </li>
      ))}
    </ol>
  );
}
