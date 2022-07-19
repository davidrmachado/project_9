import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import renderWithRouter from '../utils/renderWithRouter';

import App from '../App';
import pokemons from '../data';
import { FavoritePokemons } from '../pages';

describe('Testes do componente FavoritePokemon', () => {
  it('01. Teste se é exibida a mensagem "No favorite pokemon"', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const favoritesLink = screen.getByRole('link', {
      name: /Favorite Pokémons/i,
    });

    userEvent.click(favoritesLink);

    const textChecked = screen.getByText('No favorite pokemon found');

    expect(textChecked).toBeInTheDocument();
  });

  it('02. Teste se são exibidos os Pokémons favoritados', () => {
    const favoritePokemons = [pokemons[1], pokemons[3], pokemons[5]];
    renderWithRouter(<FavoritePokemons pokemons={ favoritePokemons } />);

    const dataTestId = screen.getAllByTestId('pokemon-name');
    expect(dataTestId.length).toEqual(favoritePokemons.length);
  });
});
