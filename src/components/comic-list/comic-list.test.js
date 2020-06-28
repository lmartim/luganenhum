import React from 'react';
import { render, cleanup } from '../../utils/test/test-utils';

import ComicList from './comic-list.component';

afterEach(cleanup)

test('render comic list and verify comic box', () => {
  const { getByTestId  } = render(<ComicList />)
    
  expect(getByTestId('comicBoxBlock')).toBeTruthy()
});
