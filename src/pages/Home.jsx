import React, { useState } from "react";
import Navbar from "../components/Navbar";
import heroImage from "../assets/hero.gif";
import sweet from "../assets/aura_Sweet.jpeg";
import sweetback from "../assets/hoodie_aura_back.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(sweet);

  return (
    <div className="page-wrapper">
      {/* SECTION 1 : HERO */}
      <section
        className="hero-container"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <Navbar />
        <div className="left-text">WANNA BE THE EVIL ?</div>
        <div className="right-text">EMBRACE DARKNESS</div>
        <div className="copyright">© 2026</div>
      </section>

      {/* SECTION 2 : PRODUIT */}
      <section className="second-slide">
        {/* Mur de texte NEW en arrière-plan */}
        <div className="bg-watermark-container">
          {Array(40).fill("NEW").map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </div>

        {/* Conteneur principal flexible */}
        <div className="content-wrapper">
          
          {/* Bloc de gauche : Textes techniques */}
          <div className="text-section">
            <h2 className="product-title">THE DARK AURA</h2>
            <p className="subtitle">Explore the depths of the void.</p>

            <div className="specs-container">
              <p><span className="highlight">Fabric :</span> 450GSM Heavyweight</p>
              <p><span className="highlight">CottonFit:</span> Oversized / Boxy Drop Shoulder</p>
              <p><span className="highlight">Detail:</span> High-density "AURA" Embroidery</p>
              <p><span className="highlight">Origin:</span> Designed in the Shadows</p>
            </div>

            <div className="status-container">
              <p>STATUTS : <span className="highlight">AVAILABLE</span></p>
              <p>001 // CORE COLLECTION</p>
              <p>VOID-PROOF CONSTRUCTION.</p>
              <p className="highlight">UNSEEN BUT FELT</p>
              <p className="roman-year">M M X X V I</p>
            </div>
          </div>
          <Link to="/Explore">
          <button class="button" data-text="Awesome">
    <span class="actual-text">&nbsp;EXPLORE&nbsp;</span>
    <span aria-hidden="true" class="hover-text">&nbsp;EXPLORE&nbsp;</span>
</button>
          </Link>
          {/* Bloc de droite : Carte Produit */}
          <div className="product-section">
            <div className="product-card">
              <div
                className="product-image-area"
                onMouseEnter={() => setCurrentImage(sweetback)}
                onMouseLeave={() => setCurrentImage(sweet)}
                style={{ backgroundImage: `url(${currentImage})` }}
              >
              </div>
            </div>
          </div>

        </div>

      </section>
      
    </div>
  );
};

export default Home;