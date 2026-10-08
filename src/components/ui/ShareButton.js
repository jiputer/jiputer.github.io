import { useState } from "react";

// Opens the phone's share sheet, or copies the link on desktop.
export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const data = { title: "John Ma", text: "John Ma · Software Engineer", url: window.location.origin + window.location.pathname };
    try {
      if (navigator.share) { await navigator.share(data); return; }
      await navigator.clipboard.writeText(data.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (e) {}
  };

  return <button type="button" className="btn small-btn" onClick={share}>{copied ? "Link copied!" : "Share this site"}</button>;
}
