import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import App from '../App';

describe('Testes do componente "About"', () => {
  it('01. Teste se "/about" contém informações sobre a Pokédex', () => {
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

  it('02. Teste se "/about" contém a imagem requerida', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const aboutLink = screen.getByRole('link', {
      name: /About/i,
    });

    userEvent.click(aboutLink);

    const imgChecked = screen.getByRole('img');

    expect(imgChecked).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
