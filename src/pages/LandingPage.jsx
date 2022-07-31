import React from 'react';
import Header from '../components/Header';

import WineBanner from '../components/WineBanner';
import Footer from '../components/Footer';
import FilterStore from '../components/FilterStore';

// import bannerLandingPage from '../../src/images/banner-header-landing-page.jpg';
// import clubeExplication from '../../src/images/como-funciona-clube.png';
import wineMain from '../../src/images/wine-main.svg';
// import wine3 from '../../src/images/wine3.svg';
import './styles/LandingPage.css';

export default function LandingPage() {
  return (
    <>
      <Header />
      <WineBanner />

      <FilterStore />
      <div className="container-geral-landing-page">
        <div className="container-landing-page">
          <Header />
          <section className="container-geral-banner-landing-page">
            <div className="container-texto-banner-landing-page">
              <h1 className="title-main">
                O maior clube de vinho <br /> do mundo!
              </h1>
              <h3 className="subtittle-main">
                Se Conecte com pessoas, se Conecte com mundo, por meio da paixão por vinho.
              </h3>
            </div>
            <div className="container-imagem-banner-landing-page">
              <img className="imagem-vinho-ariki" alt="vinho-ariki" src={wineMain} />
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </>
  );
}
