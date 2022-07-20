import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
// import { createMemoryHistory } from 'history';

import App from '../App';

describe('Testes do componente Pokedex', () => {
  it('01. Teste se a página contém um h2 com o texto especificado', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const textChecked = screen.getByRole('heading', {
      name: /Encountered pokémons/i,
      level: 2,
    });

    expect(textChecked).toBeInTheDocument();
  });

  it('02. Teste se ao clicar no botão, o próximo pokemon é exibido', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const nextBttn = screen.getByText('Próximo pokémon');

    userEvent.click(nextBttn);
    const textChecked = screen.getByText('Charmander');
    expect(textChecked).toBeInTheDocument();

    userEvent.click(nextBttn);
    const textChecked2 = screen.getByText('Caterpie');
    expect(textChecked2).toBeInTheDocument();
  });

  it('03. Teste se a página contém os botões de filtro', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const buttonCount = 7;
    const filterBttns = screen.getAllByTestId('pokemon-type-button');
    expect(filterBttns).toHaveLength(buttonCount);
  });

  it('04. Teste se a página contém um botão reset', () => {
    render(<MemoryRouter><App /></MemoryRouter>);

    const psychicBttn = screen.getByText('Psychic');
    userEvent.click(psychicBttn);

    const resetBttn = screen.getByText('All');
    userEvent.click(resetBttn);

    const pikachu = screen.getByText('Pikachu');
    expect(pikachu).toBeInTheDocument();
  });
});
