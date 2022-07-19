import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../utils/renderWithRouter';

import NotFound from '../pages/NotFound';

describe('Testes do componente NotFound', () => {
  it('01. Teste se a página contém o texto "Page requested not found 😭"', () => {
    renderWithRouter(<NotFound />);

    const textChecked = screen.getByRole('heading', {
      name: /Page requested not found/i,
      level: 2,
    });

    expect(textChecked).toBeInTheDocument();
  });

  it('02. Teste se a página mostra a imagem do Pikachu"', () => {
    renderWithRouter(<NotFound />);

    const pikachuImg = screen.getByAltText(
      'Pikachu crying because the page requested was not found',
    );

    expect(pikachuImg).toHaveAttribute(
      'src',
      'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif',
    );
  });
});
