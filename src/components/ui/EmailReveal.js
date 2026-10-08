import { useState } from "react";
import { email } from "../../content";
import Icon from "./Icon";

// "Email" button that slides your address out (with a copy button) instead of opening a mail app.
export default function EmailReveal() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (e) {}
  };

  return (
    <span className={"reveal" + (open ? " open" : "")}>
      <button type="button" className="btn" aria-expanded={open} aria-controls="email-slide" onClick={() => setOpen(!open)}>
        <Icon name="mail" />Email
      </button>
      <span id="email-slide" className="slide" aria-hidden={!open}>
        <span className="slide-inner">
          <span className="addr">{email}</span>
          <button type="button" className="copy" tabIndex={open ? 0 : -1} onClick={copy}>{copied ? "Copied!" : "Copy"}</button>
        </span>
      </span>
    </span>
  );
}
