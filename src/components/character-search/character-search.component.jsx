import React from 'react';
import styled from "styled-components";

import { Columns, Form, Button } from 'react-bulma-components/dist';

// Componente responsábel pelo form de pesquisa de personagens
const CharacterSearch = (props) => {
  return (
    <Form.Field>
      {/* Label do form */}
      <Form.Label htmlFor="character-input">Digite o nome de um personagem (em inglês)</Form.Label>
      <Columns>

        <Columns.Column>
          {/* Input do form, dispara função updateCharacter, do componente CharacterList */}
          <Form.Input id="character-input" placeholder="Ex: Spider-Man" value={props.character} onChange={(e) => props.onEdit(e.target.value)} />
        </Columns.Column>
        <CharacterSearchBlockBtns>

          {/* Botão para confirmar pesquisa, dispara função submitCharacter, do componente CharacterList */}
          <Button color="primary" onClick={() => props.onSubmit()}>
            Pesquisar
          </Button>

          {/* Botão para limpar pesquisa, dispara função clearCharacter, do componente CharacterList */ }
          {
            props.searchCharacter && (
              <Button color="danger" onClick={() => props.onClear()}>
                Limpar
              </Button>
            )
          }
        </CharacterSearchBlockBtns>
      </Columns>
    </Form.Field>
  )
}

export default CharacterSearch;

//CSS-in-JS
const CharacterSearchBlockBtns = styled.div`
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: .75rem;
  display: flex;
  justify-content: space-between;
`
