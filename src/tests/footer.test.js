import React from 'react';
import { screen } from '@testing-library/react';
import  Footer from '../components/Footer';
import renderWithRouter from './helpers/renderWithRouter';

describe('Testa o componente Footer', () => {
    beforeEach(() => {
        renderWithRouter((<Footer />));
      });
    it('verifica se o footer é renderizado', () => {
        const footer = screen.getByTestId('footer');
        expect(footer).toBeInTheDocument();
    });
    it('verifica se possui um h4 com o texto correto', () => {
        const h4 = screen.getByRole('heading', {name: 'W2W E-Commerce de Vinhos S.A.'});
    });
    it('verifica se possui o CNPJ da empresa', () => {
        const cnpj = screen.getByText('CNPJ: 09.813.204/0002-05');
        expect(cnpj).toBeInTheDocument();
    });
    it('verifica se possui o aviso sobre bebidas alcoólicas', () => {
        const aviso = screen.getByText('SE BEBER, NÃO DIRIJA. APRECIE COM MODERAÇÃO.' 
        + ' A VENDA DE BEBIDAS ALCOÓLICAS É PROIBIDA PARA MENORES DE 18 ANOS.')
    });
    it('verifica se possui o endereço correto da empresa', () => {
        const endereco = screen.getByText('Rua Comendador Alcides Simão Helou, 1478 Serra - ES - CEP 29168-090');
        expect(endereco).toBeInTheDocument();
    });
})