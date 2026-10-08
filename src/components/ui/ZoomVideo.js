import { useEffect, useRef, useState } from "react";

const MIN = 1;
const MAX = 4;
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

// Video with its own controls plus zoom and pan.
//   zoom:  − / + buttons, double-click, pinch on touch, or ctrl/⌘ + scroll
//   pan:   drag the picture while zoomed in
// It also loads quietly: it only starts fetching when near the screen, phones and
// data-saver connections get `smSrc` (a smaller file), and slow connections wait for play.
export default function ZoomVideo({ src, smSrc, poster, label }) {
  const wrap = useRef(null);
  const stage = useRef(null);
  const video = useRef(null);
  const pointers = useRef(new Map());
  const drag = useRef({ moved: false, pinch: 0 });

  const [near, setNear] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });

  const conn = navigator.connection;
  const slow = !!conn && (conn.saveData || /(^|-)2g$/.test(conn.effectiveType || ""));
  const small = slow || window.matchMedia("(max-width: 700px)").matches;
  const preload = !near || slow ? "none" : small ? "metadata" : "auto";

  useEffect(() => {
    const el = wrap.current;
    if (!el || !("IntersectionObserver" in window)) { setNear(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setNear(true); io.disconnect(); } }, { rootMargin: "500px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const limitPan = (p, z) => {
    const el = stage.current;
    if (!el) return p;
    const mx = ((z - 1) * el.clientWidth) / 2;
    const my = ((z - 1) * el.clientHeight) / 2;
    return { x: clamp(p.x, -mx, mx), y: clamp(p.y, -my, my) };
  };

  const setZ = (z) => {
    const next = clamp(z, MIN, MAX);
    setZoom(next);
    setPan((p) => (next === 1 ? { x: 0, y: 0 } : limitPan(p, next)));
  };

  // ctrl/⌘ + wheel (also trackpad pinch) zooms. A plain wheel still scrolls the page.
  useEffect(() => {
    const el = stage.current;
    const onWheel = (e) => {
      if (!(e.ctrlKey || e.metaKey)) return;
      e.preventDefault();
      setZ(zoom * (e.deltaY < 0 ? 1.15 : 1 / 1.15));
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  });

  const togglePlay = () => {
    const v = video.current;
    if (!v) return;
    if (v.paused) v.play(); else v.pause();
  };

  const onPointerDown = (e) => {
    stage.current.setPointerCapture(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    drag.current.moved = false;
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      drag.current.pinch = Math.hypot(a.x - b.x, a.y - b.y);
    }
  };

  const onPointerMove = (e) => {
    const prev = pointers.current.get(e.pointerId);
    if (!prev) return;
    const cur = { x: e.clientX, y: e.clientY };
    pointers.current.set(e.pointerId, cur);
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      if (drag.current.pinch) setZ(zoom * (d / drag.current.pinch));
      drag.current.pinch = d;
      drag.current.moved = true;
    } else if (zoom > 1) {
      const dx = cur.x - prev.x, dy = cur.y - prev.y;
      if (Math.abs(dx) + Math.abs(dy) > 0) drag.current.moved = true;
      setPan((p) => limitPan({ x: p.x + dx, y: p.y + dy }, zoom));
    }
  };

  const onPointerUp = (e) => {
    pointers.current.delete(e.pointerId);
    drag.current.pinch = 0;
    if (!drag.current.moved && pointers.current.size === 0) togglePlay();
  };

  const fullscreen = () => {
    const el = wrap.current;
    if (document.fullscreenElement) document.exitFullscreen();
    else el?.requestFullscreen?.();
  };

  return (
    <div className="zv" ref={wrap}>
      <div
        className={"zv-stage" + (zoom > 1 ? " zoomed" : "")}
        ref={stage}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onDoubleClick={() => setZ(zoom > 1 ? 1 : 2.5)}
      >
        <div className="zv-inner" style={{ transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})` }}>
          <video
            ref={video}
            src={small && smSrc ? smSrc : src}
            poster={poster}
            muted
            loop
            playsInline
            preload={preload}
            aria-label={label}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
            onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          />
        </div>
        {!playing && <span className="zv-play" aria-hidden="true">▶</span>}
      </div>
      <div className="zv-bar">
        <button type="button" onClick={togglePlay} aria-label={playing ? "Pause" : "Play"}>{playing ? "❚❚" : "▶"}</button>
        <input
          type="range" min="0" max={duration || 0} step="0.1" value={time}
          aria-label="Seek"
          onChange={(e) => { const v = video.current; if (v) { v.currentTime = Number(e.target.value); setTime(v.currentTime); } }}
        />
        <span className="zv-time">{fmt(time)} / {fmt(duration)}</span>
        <button type="button" onClick={() => setZ(zoom / 1.5)} disabled={zoom <= MIN} aria-label="Zoom out">−</button>
        <button type="button" className="zv-level" onClick={() => setZ(1)} aria-label="Reset zoom">{Math.round(zoom * 100)}%</button>
        <button type="button" onClick={() => setZ(zoom * 1.5)} disabled={zoom >= MAX} aria-label="Zoom in">+</button>
        <button type="button" onClick={fullscreen} aria-label="Fullscreen">⛶</button>
      </div>
    </div>
  );
}
