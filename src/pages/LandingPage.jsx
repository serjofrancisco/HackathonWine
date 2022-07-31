import React from 'react';
import Header from '../components/Header';
import WineBanner from '../components/WineBanner';
import StoresCarousel from '../components/StoresCarousel';
import Footer from '../components/Footer';
import wineMain from '../../src/images/wine-main.svg';
import bannerPromo1 from '../../src/images/banner-promo-1.jpg';
import bannerPromo2 from '../../src/images/banner-promo-2.png';
import bannerLojas from '../../src/images/banner-lojas-fisicas.png';
import '../pages/styles/LandingPage.css';

export default function LandingPage() {
  return (
    <>
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
            <button>Assine agora</button>
            <div className="container-imagem-banner-landing-page">
              <img className="imagem-vinho-ariki" alt="vinho-ariki" src={wineMain} />
            </div>
          </section>
          <section className="container-section-banner-promo">
            <div className="container-banner-promo">
              <img className="banner-promo1" src={bannerPromo1} alt="banner Promoção" />
              <img className="banner-promo2" src={bannerPromo2} alt="banner Promoção" />
            </div>
          </section>
          <WineBanner />
          <section className="container-section-carousel">
            <img className="imagem-banner-loja-fisica" src={bannerLojas} alt="banner Lojas" />
          </section>
          <StoresCarousel />
          <Footer />
        </div>
      </div>
    </>
  );
}
