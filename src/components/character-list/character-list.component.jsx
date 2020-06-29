import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";

import CharacterSearch from '../character-search/character-search.component';
import CharacterBox from '../character-box/character-box.component';
import LoaderIcon from '../../components/loader-icon/loader-icon.component';

import { getCharacters, getCharacter } from '../../redux/characters/characters.actions';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Columns, Container } from 'react-bulma-components/dist';

// Componente responsável pela listagem de personagens
class CharacterList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: props.characters,
      character: '',
      searchCharacter: '',
      loadingCharacter: false
    }
  }

  // Atualizando o estado sempre que alguma informação por atualizada
  // Função getDerivedStateFromProps não estava realizando a atualização
  // correta do array de characters, causando um bug na primeira opção
  UNSAFE_componentWillReceiveProps(props) {
    this.setState({
      characters: props.characters,
      loadingCharacter: false
    })
  }

  // static getDerivedStateFromProps(props) {
  //   return {
  //     characters: props.characters,
  //     loadingCharacter: false
  //   }
  // }

  // Função para atualizar o character, no update do input
  updateCharacter = (value) => {
    this.setState({ 
      character: value 
    })
  }

  // Função responsábel por disparar a action para buscar por um personagens específico.
  // Caso o valor do input esteja vazio, ele irá resetar a pesquisa
  submitCharacter = () => {
    if (this.state.character.length > 0) {
      this.props.getCharacter(this.state.character);
      this.setState({
        loadingCharacter: true,
        searchCharacter: this.state.character
      })
    } else {
      this.props.getCharacters();
      this.setState({
        loadingCharacter: true,
        searchCharacter: ''
      })
    }
  }

  // Função para limpar e resetar a pesquisa
  clearCharacter = () => {
    this.props.getCharacters();
    this.setState({
      loadingCharacter: true,
      character: '',
      searchCharacter: ''
    })
  }

  render() {
    return (
      <Container data-testid="characterListBlock">
        {/* Exibe o componente de pesquisa, passando como props o valor do input,
        uma variável com o personagem já pesquisado e as funções updateCharacter, submitCharacter e clearCharacter */}
        <CharacterSearch character={this.state.character} searchCharacter={this.state.searchCharacter} onEdit={this.updateCharacter} onSubmit={this.submitCharacter} onClear={this.clearCharacter} />

        {
          !this.state.loadingCharacter ? (
            // Renderização da lista de personagens.
            // Caso personagem não exista, exibe mensagem de erro
            <Columns>
              {
                this.state.characters.characters.length > 0 ? (
                  this.state.characters.characters.map((character, index) => (
                    <Columns.Column key={index} size="one-fifth">
                      <CharacterBox character={character} />
                    </Columns.Column>
                  ))
                ) : (
                  <Columns.Column>
                    <CharacterListBlockEmpty>
                      Não foi possível encontrar nenhum personagem com nome {this.state.searchCharacter}
                    </CharacterListBlockEmpty>
                  </Columns.Column>
                )
              }
            </Columns>
          ) : (
            // Exibe ícone de loading, caso pesquisa esteja em andamento
            <CharacterListBlockLoader>
              <LoaderIcon/>
            </CharacterListBlockLoader>
          )
        }
      </Container>
    )
  }
};

// Funções do Redux, para obter o estado e chamar as actions
const mapStateToProps = state => ({
  characters: state.characters
})

const mapDispatchToProps = dispatch => {
  return {
    getCharacters: () => dispatch(getCharacters()),
    getCharacter: (character) => dispatch(getCharacter(character)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);

//CSS-in-JS
const CharacterListBlockLoader = styled.div`
  margin-top: 150px;
`

const CharacterListBlockEmpty = styled.div`
  margin: 150px auto 0;
  text-align: center;
`