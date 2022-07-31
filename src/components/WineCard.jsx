import React from 'react';
import './styles/WineCard.css';
import { putOnCard } from '../helpers/helpersWines';

export default function WineCard(wine) {
  const {
    name,
    image,
    price,
    discount,
    priceMember,
    priceNonMember,
    // type,
    // classification,
    // size,
    // rating,
    // avaliations,
    country,
    // region,
    flag
    // sommelierComment
  } = wine.wine || wine;
  return (
    <div className="container-geral-wine-card">
      <div className="container-wine-card" data-testid="winecard">
        <div className="container-nome-flag-wine">
          {/* <span>Nota:{rating}</span> */}
          {/* <span>{size}</span> */}
          {/* <span>{type}</span> */}
          {/* <span>{classification}</span> */}
          {/* <span>{`País:${country}Região: ${region}`}</span> */}
          <img className="imagem-winecard-bandeira" src={flag} alt={country} />
          <img className="imagem-winecard-vinho" src={image} alt={name} />
        </div>
        <h3 className="wine-name-WineCard">{name}</h3>
        <div className="container-wine-card-prices">
          <span></span>
          <span>R${price}</span>
          <span>R${discount}</span>
          <span>Preço - R${priceNonMember}</span>
          <span>Preço para Membros- R${priceMember}</span>
        </div>
        <div className="container-wine-card-rating">
          {/* <span>Avaliações:{avaliations}</span> */}
          {/* <p>{sommelierComment}</p> */}
        </div>
        <button onClick={() => putOnCard(wine)}>Comprar</button
      </div>
    </div>
  );
}
