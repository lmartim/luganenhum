import React from 'react';
import { render, cleanup } from '../../utils/test/test-utils';

import Home from './home.component';

afterEach(cleanup)

// Testes relacionados ao componente Home

// Verifica se a página foi renderiza e se o title foi exibido
test('render home', () => {
  const { getByTestId  } = render(<Home />)
    
  expect(getByTestId('title')).toHaveTextContent('QUADRINHOS')
});

// Verifica se a listagem de quadrinhos foi realizada
test('verify if comics list is rendered', () => {
  const { getByTestId  } = render(<Home />)
    
  expect(getByTestId('comicListBlock')).toBeTruthy()
});