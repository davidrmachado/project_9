import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

function renderWithRouter(ComponentToRender) {
  const customHistory = createMemoryHistory();
  const renderObject = render(
    <Router history={ customHistory }>
      { ComponentToRender }
    </Router>,
  );

  return {
    ...renderObject,
    history: customHistory,
  };
}

export default renderWithRouter;
