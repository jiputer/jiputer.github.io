import "./sections.css";
import flower2 from '../assets/flower2.gif'
function Extras() {
  return (
    <div name="extras" id="extras" className = "sections"> 
        <div className="section">
            <header className="stdHeader"> What I'm currently Listening To :) </header>
            <p className="sectionText"> I really love listening to music, and especially new genres, 
            here is what I currently enjoy </p>

            <iframe className="spotify_iframe" title="vibing... :)"  src="https://open.spotify.com/embed/playlist/26FhFIaZ0W7rCBPKs47jvC?utm_source=generator"  frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>

        <div className="section">
        <img src={flower2} alt=":) ..." width="100%" height="100%"/>
        </div>
        <div className="game">
          <header className="stdHeader"> Galaxia Bound - SpaceScore 30 Winner!</header>
        <iframe frameborder="0" src="https://itch.io/embed-upload/10792162?color=2e2c3b" allowfullscreen="" width="960" height="670"><a href="https://qin2500.itch.io/galaxia-bound">
        </a></iframe>
        </div>
    </div>

  );
}

export default Extras;
