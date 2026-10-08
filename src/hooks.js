import { useEffect, useState } from "react";
import { TABS } from "./components/tabs";

// Tiny hash router, so it works on GitHub Pages without a server.
//   #experience / #projects / #education   -> the home page tab
//   #/p/<slug>                              -> a project page
const tabFromHash = () => {
  const id = window.location.hash.slice(1);
  return TABS.some((t) => t.id === id) ? id : TABS[0].id;
};
const slugFromHash = () => (window.location.hash.match(/^#\/p\/([\w-]+)/) || [])[1] || null;

export function useRoute() {
  const [tab, setTab] = useState(tabFromHash);
  const [slug, setSlug] = useState(slugFromHash);

  useEffect(() => {
    const onHash = () => {
      const next = slugFromHash();
      setSlug(next);
      if (!next) setTab(tabFromHash());
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const selectTab = (id) => {
    setTab(id);
    window.history.replaceState(null, "", "#" + id);
  };

  return { tab, slug, selectTab };
}
