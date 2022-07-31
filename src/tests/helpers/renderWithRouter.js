import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(<BrowserRouter history={history}>{component}</BrowserRouter>),
    history
  };
};
export default renderWithRouter;
