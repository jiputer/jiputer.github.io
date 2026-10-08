import "./App.css";
import { useRoute } from "./hooks";
import { TABS } from "./components/tabs";
import TabBar from "./components/tabs/TabBar";
import ProjectPage from "./components/project/ProjectPage";
import ThemeToggle from "./components/ui/ThemeToggle";
import EmailReveal from "./components/ui/EmailReveal";
import ShareButton from "./components/ui/ShareButton";
import Icon from "./components/ui/Icon";
import { smiley1, smiley5 } from "./components/assets";
import { hero, links, navLinks, email, projects } from "./content";

const ext = { target: "_blank", rel: "noopener noreferrer" };

export default function App() {
  const { tab, slug, selectTab } = useRoute();
  const project = slug ? projects.find((p) => p.slug === slug) : null;

  return (
    <>
      <header className="nav">
        <a href="#experience" className="brand"><img src={smiley5} alt="" />John Ma</a>
        <nav>
          {navLinks.map((l) => <a key={l.label} href={l.href} {...ext}>{l.label}</a>)}
          <ThemeToggle />
        </nav>
      </header>

      <main>
        {project ? (
          <ProjectPage p={project} />
        ) : (
          <>
            <section className="hero">
              <div>
                <p className="hello">{hero.hello}</p>
                <h1>{hero.title}</h1>
                <p className="lede">{hero.lede}</p>
                <div className="actions">
                  <a className="btn primary" href={links.resume} {...ext}>Resume</a>
                  <EmailReveal />
                  <a className="btn" href={links.linkedin} {...ext}><Icon name="linkedin" />LinkedIn</a>
                  <a className="btn" href={links.github} {...ext}><Icon name="github" />GitHub</a>
                  <a className="btn" href={links.itch} {...ext}><Icon name="itch" />itch.io</a>
                </div>
              </div>
              <img className="sticker" src={smiley1} alt="A smiley face" />
            </section>

            <TabBar tab={tab} onSelect={selectTab} />

            <div className="panels">
              {TABS.map(({ id, Component }) => (
                <div key={id} role="tabpanel" id={"panel-" + id} aria-labelledby={"tab-" + id} hidden={tab !== id}>
                  <Component />
                </div>
              ))}
            </div>
          </>
        )}
      </main>

      <footer>
        <img src={smiley1} alt="" />
        <p>Say hi at <span className="addr-foot">{email}</span></p>
        <ShareButton />
        <p className="small">Made by John Ma</p>
      </footer>
    </>
  );
}
