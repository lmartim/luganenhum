import React from 'react';
import { render, cleanup } from './utils/test/test-utils';
import App from './App';

afterEach(cleanup)

test('render app', () => {
  const { asFragment } = render(<App />)
    
  expect(asFragment(<App />)).toMatchSnapshot()
});
