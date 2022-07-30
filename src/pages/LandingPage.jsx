import React from 'react';
import Header from '../components/Header';
import WineBanner from '../components/WineBanner';
import Footer from '../components/Footer';
import FilterStore from '../components/FilterStore';

export default function LandingPage() {
  return (
    <>
      <Header />
      <WineBanner />
      <Footer />
      <FilterStore />
    </>
  );
}
