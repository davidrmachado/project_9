import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import App from '../App';

describe('Testes do componente App', () => {
  it('01. Teste o redirecionamento para "/"', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const homeLink = screen.getByRole('link', {
      name: /Home/i,
    });

    userEvent.click(homeLink);

    const textChecked = screen.getByRole('heading', {
      name: /Encountered pokémons/i,
      level: 2,
    });

    expect(textChecked).toBeInTheDocument();
  });

  it('02. Teste o redirecionamento para "/about"', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const aboutLink = screen.getByRole('link', {
      name: /About/i,
    });

    userEvent.click(aboutLink);

    const textChecked = screen.getByRole('heading', {
      name: /About Pokédex/i,
      level: 2,
    });

    expect(textChecked).toBeInTheDocument();
  });

  it('03. Teste o redirecionamento para "/favorites"', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const favoritesLink = screen.getByRole('link', {
      name: /Favorite Pokémons/i,
    });

    userEvent.click(favoritesLink);

    const textChecked = screen.getByRole('heading', {
      name: /Favorite pokémons/i,
      level: 2,
    });

    expect(textChecked).toBeInTheDocument();
  });

  it('04. Teste o redirecionamento para "/notFound"', () => {
    const customHistory = createMemoryHistory();
    render(<Router history={ customHistory }><App /></Router>);

    customHistory.push('/rota-inexistente');

    const textChecked = screen.getByRole('heading', {
      name: /Page requested not found/i,
      level: 2,
    });

    expect(textChecked).toBeInTheDocument();
  });
});
