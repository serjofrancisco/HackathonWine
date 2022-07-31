import React from 'react';
import Header from '../components/Header';

import WineBanner from '../components/WineBanner';
import Footer from '../components/Footer';
import FilterStore from '../components/FilterStore';


// import bannerLandingPage from '../../src/images/banner-header-landing-page.jpg';
// import clubeExplication from '../../src/images/como-funciona-clube.png';
import vinhoAriki from '../../src/images/vinho-ariki.png';
// import Footer from '../components/Footer';
import './styles/LandingPage.css';


export default function LandingPage() {
  return (
    <>

      <Header />
      <WineBanner />
      <Footer />
      <FilterStore />

      <div className="container-geral-landing-page">
        <div className="container-landing-page">
          <Header />
          <div className="container-geral-banner-landing-page">
            <div className="container-banner-landing-page">
              <div className="container-texto-banner-landing-page">
                <h1>O maior clube de vinho do mundo!</h1>
                <h3>Se Conect com pessoas...</h3>
                <h3>Se Conect com mundo...</h3>
                <h3>por meio da paixão por vinho.</h3>
              </div>
              <div className="container-imagem-banner-landing-page">
                <img className="imagem-vinho-ariki" alt="vinho-ariki" src={vinhoAriki} />
              </div>
            </div>
          </div>
          <div className="container-main-landing-page">
            <main>
              {/* <div className="container-explication-landing-page">
            <img alt="explication" src={clubeExplication} />
          </div> */}
              {/* <WineBanner /> */}
            </main>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
}
