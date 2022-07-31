import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import PropTypes from 'prop-types';
import '../pages/styles/LandingPage.css';

export default function StoreCard({ store }) {
  const { imgUrl, title, address, phone, mapsUrl } = store;
  return (
    <div className="store-card-container" data-testid="store-card">
      <img className="imagem-loja-fisica" alt="Fachada da loja" src={imgUrl} />
      <div className="container-endereco-carousel-lojas">
        <h3 className="nome-lojas">{title}</h3>
        <address className="address-lojas">{address}</address>
      </div>
      <div className="store-buttons-container">
        <a href={`https://wa.me/${phone}`} target="_blank" rel="noopener noreferrer">
          <BsWhatsapp size="2rem" color="green" />
        </a>
        <a href={mapsUrl} target="_blank" rel="noopener noreferrer" data-testid="phone">
          <MdLocationOn size="2rem" color="red" data-testid="maps" />
          Maps
        </a>
      </div>
    </div>
  );
}

StoreCard.propTypes = {
  store: PropTypes.shape(
    {
      imgUrl: PropTypes.string,
      title: PropTypes.string,
      address: PropTypes.string,
      mapsUrl: PropTypes.string
    }.isRequired
  )
};
