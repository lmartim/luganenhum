import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";

import Title from '../../components/title/title.component';
import CharacterList from '../../components/character-list/character-list.component';
import LoaderIcon from '../../components/loader-icon/loader-icon.component';

import { getCharacters } from '../../redux/characters/characters.actions';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components/dist';

import './characters.styles.css'

class Characters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: props.characters
    }
  }

  componentDidMount() {
    this.props.getCharacters()
  }

  static getDerivedStateFromProps(props) {
    return {
      characters: props.characters
    }
  }

  render() {
    return (
      <CharacterContentBlock>
        <Title title={'PERSONAGENS'} />
        {(() => {
          switch (this.state.characters.status) {
            case 'loading':
              return (
                <CharacterContentBlockLoader>
                  <LoaderIcon/>
                </CharacterContentBlockLoader>
              )
            case 'success':
              return <CharacterList />
            case 'fail':
              return (
                <CharacterContentBlockFail>
                  Não foi possível obter os dados
                  <Button className='failcontentblock__button--state-fail' color="primary" onClick={this.props.getCharacters()}>
                    Tentar novamente
                  </Button>
                </CharacterContentBlockFail>
              )
            default:
              return null;
          }
        })()}
      </CharacterContentBlock>
    )
  }
};

const mapStateToProps = state => ({
  characters: state.characters
})

const mapDispatchToProps = dispatch => {
  return {
    getCharacters: () => dispatch(getCharacters()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters);

const CharacterContentBlock = styled.section`
  min-height: calc(100vh - 81px);
  background-color: white;
  border-top: 1px solid #393939;
  padding: 50px 0;
`;

const CharacterContentBlockLoader = styled.div`
  margin-top: 150px;
`

const CharacterContentBlockFail = styled.div`
  color: #202020;
  text-align: center;
  margin-top: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
`