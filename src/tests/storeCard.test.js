import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import StoreCard from '../components/StoreCard';
import storesList from './mocks/stores';

describe('Testa o componente StoreCard', () => {
  beforeEach(() => {
    renderWithRouter(<StoreCard store={storesList[0]} />);
  });
  it('verifica se a loja é renderizado', () => {
    const storeCard = screen.getByTestId('store-card');
    expect(storeCard).toBeInTheDocument();
  });
  it('verifica se a loja possui as propriedades corretas', () => {
    const image = screen.getByAltText('Fachada da loja');
    const title = screen.getByRole('heading', { level: 3 });
    const address = screen.getByText('Rua Alvarenga Peixoto, 655, Lourdes, Belo Horizonte (MG)');
    const phone = screen.getByTestId('phone');
    const maps = screen.getByTestId('maps');
    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(address).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(maps).toBeInTheDocument();
  });
});
