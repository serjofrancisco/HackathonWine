import React from 'react';
import wTransparente from '../images/w-transparente.png';
import './styles/Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer-endereço-cnpj">
        <img className="footer-logo" src={wTransparente} alt="W" />
        <div className="footer-cnpj">
          <h4>W2W E-Commerce de Vinhos S.A.</h4>
          <span>CNPJ: 09.813.204/0002-05</span>
        </div>
        <p className="footer-endereço">
          Rua Comendador Alcides Simão Helou, 1478 <br /> Serra - ES - CEP 29168-090
        </p>
      </div>
      <p className="footer-aviso">
        SE BEBER, NÃO DIRIJA. APRECIE COM MODERAÇÃO. A VENDA DE BEBIDAS ALCOÓLICAS É PROIBIDA PARA
        MENORES DE 18 ANOS.
      </p>
    </footer>
  );
}
