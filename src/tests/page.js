import { screen, describe, it, expect } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';

describe('Test About.js', () => {
  it('Tem o Tem o titulo e paragrafos certos ', () => {
    renderWithRouter();
    const aboutTitle = screen.getByRole('heading', { name: 'About Pokédex' });
    const textApp = screen.getByText(/This application simulates a Pokédex,/i);
    const aboutText = screen.getByText(/a digital encyclopedia containing all Pokémons/i);
    const text2 = screen.getByText(/One can filter Pokémons by type,/i);
    const text3 = screen.getByText(/, and see more details for each one of them/i);
    expect(aboutText).toBeInTheDocument();
    expect(aboutTitle).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
    expect(text3).toBeInTheDocument();
    expect(textApp).toBeInTheDocument();
  });
  it('Tem a imagem certa', () => {
    renderWithRouter();
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute(
      'src',
      'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png'
    );
  });
});
