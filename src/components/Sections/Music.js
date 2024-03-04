import "./sections.css";
import flower2 from '../assets/flower2.gif'
function Music() {
  return (
    <div name="music" id="music" className = "sections"> 
        <div className="section">
            <header className="stdHeader"> What I'm currently Listening To :) </header>
            <p className="sectionText"> I really love listening to music, and especially new genres, 
            here is what I currently enjoy </p>

            <iframe className="spotify_iframe" title="vibing... :)"  src="https://open.spotify.com/embed/playlist/26FhFIaZ0W7rCBPKs47jvC?utm_source=generator"  frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>

        <div className="section">
        <img src={flower2} alt=":) ..." width="100%" height="100%"/>
        </div>
    </div>

  );
}

export default Music;
