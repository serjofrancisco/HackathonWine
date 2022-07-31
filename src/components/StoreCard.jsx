import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import PropTypes from 'prop-types';
import './styles/StoreCard.css';

export default function StoreCard({ store }) {
  const { imgUrl, title, address, phone, mapsUrl } = store;
  return (
    <div className="store-card-container">
      <img alt="Fachada da loja" src={imgUrl} />
      <div>
        <h3>{title}</h3>
        <address>{address}</address>
      </div>
      <div className="store-buttons-container">
        <a href={`https://wa.me/${phone}`} target="_blank" rel="noopener noreferrer">
          <BsWhatsapp size="2rem" color="green" />
        </a>
        <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
          <MdLocationOn size="2rem" color="red" />
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
