import React from 'react';
import { render, cleanup, fireEvent } from '../../utils/test/test-utils';

import Characters from '../characters/characters.component';

afterEach(cleanup)

const setup = () => {
  const utils = render(<Characters />)
  const input = utils.getByLabelText('Digite o nome de um personagem (em inglês)')
  return {
    input,
    ...utils,
  }
}

test('render characters', () => {
  const { getByTestId  } = setup()
    
  expect(getByTestId('title')).toHaveTextContent('PERSONAGENS')
});

test('verify if characters list is rendered', () => {
  const { getByTestId  } = render(<Characters />)
    
  expect(getByTestId('characterListBlock')).toBeTruthy()
});

test('simulate fill input and clear search', async () => {
  const { getByText, input  } = setup()
  
  fireEvent.change(input, { target: { value: 'Homem-Aranha' } })
  expect(input.value).toBe('Homem-Aranha')

  let node = getByText("Pesquisar");
  fireEvent.click(node);

  node = getByText("Limpar");
  fireEvent.click(node);
  expect(input.value).toBe('')
});