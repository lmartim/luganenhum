import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";

import CharacterSearch from '../character-search/character-search.component';
import CharacterBox from '../character-box/character-box.component';
import LoaderIcon from '../../components/loader-icon/loader-icon.component';

import { getCharacters, getCharacter } from '../../redux/characters/characters.actions';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Columns, Container } from 'react-bulma-components/dist';

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

  // static getDerivedStateFromProps(props) {
  //   return {
  //     characters: props.characters,
  //     loadingCharacter: false
  //   }
  // }

  UNSAFE_componentWillReceiveProps(props) {
    this.setState({
      characters: props.characters,
      loadingCharacter: false
    })
  }

  updateCharacter = (value) => {
    this.setState({ 
      character: value 
    })
  }

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
        <CharacterSearch character={this.state.character} searchCharacter={this.state.searchCharacter} onEdit={this.updateCharacter} onSubmit={this.submitCharacter} onClear={this.clearCharacter} />
        {
          !this.state.loadingCharacter ? (
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
            <CharacterListBlockLoader>
              <LoaderIcon/>
            </CharacterListBlockLoader>
          )
        }
      </Container>
    )
  }
};

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

const CharacterListBlockLoader = styled.div`
  margin-top: 150px;
`

const CharacterListBlockEmpty = styled.div`
  margin: 150px auto 0;
  text-align: center;
`