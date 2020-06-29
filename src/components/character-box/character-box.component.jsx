import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import styled from "styled-components";

// Componente responsável pelos boxes dos personagens, exibidos na listagem
// Recebe uma prop com as informações do personagem
class CharacterBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      character: props.character
    }
  }

  render() {
    const character = this.state.character

    return (
      <CharacterBoxBlock>
        {/* Exibe a imagem do personagem */}
        <CharacterBoxImage src={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`} alt={character.name} />
        {/* Exibe o nome do personagem */}
        <CharacterBoxTitle>{character.name}</CharacterBoxTitle>
      </CharacterBoxBlock>
    )
  }
}

export default withRouter((CharacterBox));

//CSS-in-JS
const CharacterBoxBlock = styled.div`
  padding: 20px;
  border: 1px solid #393939;
  border-radius: 5px;
  background-color: #202020;
  height: 100%;
  box-shadow: 0px 9px 11px 2px rgba(161,161,161,1);
  position: relative;
`

const CharacterBoxImage = styled.img`
  @media(max-width: 1024px) {
    margin: 0 auto;
    width: 100%;
  }
`

const CharacterBoxTitle = styled.div`
  text-align: center;
  color: white;
  font-weight: 800;
  margin-top: 5px;
`

