import React from 'react';
import './styles/WineCard.css';
import { putOnCard } from '../helpers/helpersWines';

export default function WineCard(wine) {
  const { name, image, price, priceMember, page, country, flag } = wine.wine || wine;
  return (
    <div className="container-geral-wine-card">
      <div className="container-nome-flag-wine">
        <div className="container-img-carousel">
          <img className="imagem-winecard-bandeira" src={flag} alt={country} />
          <img className="imagem-winecard-vinho" src={image} alt={name} />
        </div>
        <h3 className="wine-name-WineCard">{name}</h3>
        <div className="container-wine-card-prices">
          <span></span>
          <span>
            R$ <a>{price.toFixed(2)} </a>{' '}
          </span>
          <br />
          <span className="texto-membro">
            Preço para Membros <br />
            <a className="preco-membro"> R$ {priceMember.toFixed(2)}</a>
          </span>
        </div>

        {page && (
          <button className="buyButton" onClick={() => putOnCard(wine)}>
            Comprar
          </button>
        )}

        <div className="container-wine-card-rating"></div>
      </div>
    </div>
  );
}
