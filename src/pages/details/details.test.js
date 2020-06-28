import React from 'react';
import { render, cleanup } from '../../utils/test/test-utils';

import Details from '../details/details.component';

afterEach(cleanup)

test('render details page', () => {
  const { getByTestId  } = render(<Details />)
    
  expect(getByTestId('title')).toHaveTextContent('DETALHES')
});

test('render character detail', () => {
  const { getByTestId  } = render(<Details />)
    
  expect(getByTestId('comicDetailBlock')).toBeTruthy()
});
