import React from 'react';

export default function WineCard(wine) {
  const {
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
  } = wine;
  
  return <div>WineCard</div>;
}
