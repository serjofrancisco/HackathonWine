import React from 'react';
import wTransparente from '../images/w-transparente.png';

export default function Footer() {
  return (
    <footer data-testid="footer">
      <img src={wTransparente} alt="W" />
      <div>
        <h4>W2W E-Commerce de Vinhos S.A.</h4>
        <span>CNPJ: 09.813.204/0002-05</span>
      </div>
      <p>
        Rua Comendador Alcides Simão Helou, 1478 <br /> Serra - ES - CEP 29168-090
      </p>
      <p>
        SE BEBER, NÃO DIRIJA. APRECIE COM MODERAÇÃO. A VENDA DE BEBIDAS ALCOÓLICAS É PROIBIDA PARA
        MENORES DE 18 ANOS.
      </p>
    </footer>
  );
}
