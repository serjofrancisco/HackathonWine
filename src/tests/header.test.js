import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, unstable_HistoryRouter } from 'react-router-dom';
import App from '../App';
import Header from '../components/Header';
import renderWithRouter from './helpers/renderWithRouter';
import renderWithProvider from './helpers/renderWithProvider';

describe('Testa o componente Header', () => {
    beforeEach(() => {
        renderWithRouter((<Header />));
      });
    it('verifica se o header é renderizado', () => {
        const header = screen.getByTestId('header');
        expect(header).toBeInTheDocument();
    })
    it('verifica se possui o logo da wine', () => {
        const wineLogo = screen.getByAltText('Wine');
        expect(wineLogo).toBeInTheDocument();
        expect(wineLogo.src).toContain('/wine.svg');
    })
    it('verifica se possui os links para loja e clube', () => {
        const lojaLink = screen.getByRole('link', {name: 'Loja'});
        const clubeLink = screen.getByRole('link', {name: 'Clube'});
        expect(lojaLink).toBeInTheDocument();
        expect(clubeLink).toBeInTheDocument();
    })
})