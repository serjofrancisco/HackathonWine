import imageContruction from '../../src/images/pagina-construção.png';
import React from 'react';
import './styles/PaginaConstrucao.css';

export default function paginaConstrucao() {
  return (
    <div className="container-pagina-construcao">
      <img src={imageContruction} alt="Página em construção" />
    </div>
  );
}
