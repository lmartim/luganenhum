import React from 'react';
import { render, cleanup } from '../../utils/test/test-utils';

import ComicList from './comic-list.component';

afterEach(cleanup)

// Testes relacionados ao componente ComicList

// Verifica se a listagem de quadrinhos foi feita e se o box de quadrinho foi renderizado
test('render comic list and verify comic box', () => {
  const { getByTestId  } = render(<ComicList />)
    
  expect(getByTestId('comicBoxBlock')).toBeTruthy()
});
