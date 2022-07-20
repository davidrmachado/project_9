import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../utils/renderWithRouter';

import App from '../App';

describe('Testes do componente Pokemon', () => {
  it('01. Teste se é renderizado um card com as informações do pokémon', () => {
    renderWithRouter(<App />);

    const dragonBttn = screen.getByText('Dragon');
    userEvent.click(dragonBttn);

    const textChecked = screen.getByText('Dragonair');
    expect(textChecked).toBeInTheDocument();

    const textChecked2 = screen.getByTestId('pokemon-type');
    expect(textChecked2).toBeInTheDocument();
    expect(textChecked2.innerHTML).toBe('Dragon');

    const textChecked3 = screen.getByText('Average weight: 16.5 kg');
    expect(textChecked3).toBeInTheDocument();

    const imgChecked = screen.getByAltText(/dragonair sprite/i);
    expect(imgChecked.src).toBe('https://cdn2.bulbagarden.net/upload/2/2c/Spr_5b_148.png');
  });

  it('02. Teste se existe o ícone de favorito', () => {
    renderWithRouter(<App />);

    const details = screen.getByText(/more details/i);
    userEvent.click(details);

    const check = screen.getByLabelText(/pokémon favoritado/i);
    userEvent.click(check);

    const star = screen.getByAltText(/pikachu is marked as favorite/i);
    expect(star).toBeInTheDocument();
    expect(star.src).toBe('http://localhost/star-icon.svg');
  });
});
