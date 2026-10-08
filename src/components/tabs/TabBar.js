import { useRef } from "react";
import { TABS } from "./index";

// Accessible tab buttons: arrow keys, Home and End all work.
export default function TabBar({ tab, onSelect }) {
  const refs = useRef({});

  const go = (id) => { onSelect(id); refs.current[id]?.focus(); };

  const onKeyDown = (e) => {
    const i = TABS.findIndex((t) => t.id === tab);
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (step) { e.preventDefault(); go(TABS[(i + step + TABS.length) % TABS.length].id); }
    else if (e.key === "Home") { e.preventDefault(); go(TABS[0].id); }
    else if (e.key === "End") { e.preventDefault(); go(TABS[TABS.length - 1].id); }
  };

  return (
    <div className="tabs" role="tablist" aria-label="Sections" onKeyDown={onKeyDown}>
      {TABS.map((t) => (
        <button
          key={t.id} id={"tab-" + t.id} role="tab" type="button"
          ref={(el) => (refs.current[t.id] = el)}
          aria-selected={tab === t.id} aria-controls={"panel-" + t.id}
          tabIndex={tab === t.id ? 0 : -1}
          className={"tab" + (tab === t.id ? " active" : "")}
          onClick={() => onSelect(t.id)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
