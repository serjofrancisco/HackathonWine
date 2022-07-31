import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';
import renderWithProvider from './helpers/renderWithProvider';

describe('Testa a página inicial', () => {
    beforeEach(() => {
        renderWithRouter(renderWithProvider(<App />));
      });
    it('verfica se o componente Header é renderizado', () => {
        const header = screen.getByTestId('header');
        expect(header).toBeInTheDocument();
    });
    it('verifica se o componente Footer é renderizado', () => {
        const footer = screen.getByTestId('footer');
        expect(footer).toBeInTheDocument();
    });
    it('verifica se o componente WineBanner é renderizado', () => {
        const wineBanner = screen.getByTestId('wine-banner');
        expect(wineBanner).toBeInTheDocument();
    });
    it('verifica se o componente StoreCard é renderizado', () => {
        const storeCard = screen.getByTestId('store-card');
        expect(storeCard).toBeInTheDocument();
    });
});