import Navbar from "../components/Navbar";
import heroImage from "../assets/hero.gif";


const Home = () => {
  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <Navbar />

      <div className="left-text">WANNA BE THE EVIL ?</div>
      <div className="right-text">EMBRACE DARKNESS</div>
        
      <div className="copyright">© 2026</div>
    </div>
  );
};

export default Home;
