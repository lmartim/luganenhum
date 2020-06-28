import React from 'react';
import styled from "styled-components";

import { Columns, Form, Button } from 'react-bulma-components/dist';

const CharacterSearch = (props) => {
  return (
    <Form.Field>
      <Form.Label htmlFor="character-input">Digite o nome de um personagem (em inglês)</Form.Label>
      <Columns>
        <Columns.Column>
          <Form.Input id="character-input" placeholder="Ex: Spider-Man" value={props.character} onChange={(e) => props.onEdit(e.target.value)} />
        </Columns.Column>
        <CharacterSearchBlockBtns>
          <Button color="primary" onClick={() => props.onSubmit()}>
            Pesquisar
          </Button>
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

const CharacterSearchBlockBtns = styled.div`
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: .75rem;
  display: flex;
  justify-content: space-between;
`
