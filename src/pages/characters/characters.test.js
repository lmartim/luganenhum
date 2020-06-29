import React from 'react';
import { render, cleanup, fireEvent } from '../../utils/test/test-utils';

import Characters from '../characters/characters.component';

afterEach(cleanup)

// Testes relacionados ao componente Characters

// Faz um setup, para conseguir se obter informações do Input
const setup = () => {
  const utils = render(<Characters />)
  const input = utils.getByLabelText('Digite o nome de um personagem (em inglês)')
  return {
    input,
    ...utils,
  }
}

// Verifica se a página foi renderiza e o título exibido
test('render characters', () => {
  const { getByTestId  } = setup()
    
  expect(getByTestId('title')).toHaveTextContent('PERSONAGENS')
});

// Verifica se a listagem de personagens foi exibida
test('verify if characters list is rendered', () => {
  const { getByTestId  } = render(<Characters />)
    
  expect(getByTestId('characterListBlock')).toBeTruthy()
});

// Preenche o input, clica no botão de Pesquisa, 
// depois disso clica no botão para limpar e verifica se o input está vazio
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