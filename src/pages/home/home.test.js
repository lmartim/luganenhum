import React from 'react';
import { render, cleanup } from '../../utils/test/test-utils';

import Home from './home.component';

afterEach(cleanup)

test('render home', () => {
  const { getByTestId  } = render(<Home />)
    
  expect(getByTestId('title')).toHaveTextContent('QUADRINHOS')
});

test('verify if comics list is rendered', () => {
  const { getByTestId  } = render(<Home />)
    
  expect(getByTestId('comicListBlock')).toBeTruthy()
});
