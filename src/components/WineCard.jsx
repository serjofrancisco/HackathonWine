import React from 'react';

export default function WineCard(wine) {
  const {
    name,
    image,
    price,
    discount,
    priceMember,
    priceNonMember,
    type,
    classification,
    size,
    rating,
    avaliations,
    country,
    region,
    flag,
    sommelierComment
  } = wine.wine;

  return (
    <section className="wine-card">
      <div className="wine-card-info">
        <h3>{name}</h3>
        <span>{size}</span>
        <span>{type}</span>
        <span>{classification}</span>
        <span>{`País:${country}Região: ${region}`}</span>
        <img src={flag} alt={country} />
        <img src={image} alt={name} />
      </div>
      <div className="wine-card-prices">
        <span></span>
        <span>R${price}</span>
        <span>R${discount}</span>
        <span>Preço - R${priceNonMember}</span>
        <span>Preço para Membros- R${priceMember}</span>
      </div>
      <div className="wine-card-rating">
        <span>Nota:{rating}</span>
        <span>Avaliações:{avaliations}</span>
        <p>{sommelierComment}</p>
      </div>
    </section>
  );
}
