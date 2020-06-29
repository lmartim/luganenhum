import React from 'react';
import { render, cleanup } from '../../utils/test/test-utils';

import Details from '../details/details.component';

afterEach(cleanup)

// Testes relacionados ao componente Details

// Verifica se a página foi renderizada e o título exibido
test('render details page', () => {
  const { getByTestId  } = render(<Details />)
    
  expect(getByTestId('title')).toHaveTextContent('DETALHES')
});

// Verificar se o box com informações foi exibido
test('render character detail', () => {
  const { getByTestId  } = render(<Details />)
    
  expect(getByTestId('comicDetailBlock')).toBeTruthy()
});
