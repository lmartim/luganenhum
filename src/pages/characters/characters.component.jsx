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

// Page responsável pela página de personagens
// Ela irá exibir uma lista dopersonagens
class Characters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: props.characters
    }
  }

  
  componentDidMount() {
    // Buscando uma lista de personagens da API
    this.props.getCharacters()
  }

  // Atualizando o estado sempre que alguma informação por atualizada
  static getDerivedStateFromProps(props) {
    return {
      characters: props.characters
    }
  }

  render() {
    return (
      <CharacterContentBlock>
        {/* Chama o componente de título */}
        <Title title={'PERSONAGENS'} />
        {(() => {
          switch (this.state.characters.status) {
            case 'loading':
              // Caso status seja loading, exiber ícone de carregamento
              return (
                <CharacterContentBlockLoader>
                  <LoaderIcon/>
                </CharacterContentBlockLoader>
              )
            case 'success':
              // Rendereza listagem de personagens, em caso de status sucesso
              return <CharacterList />
            case 'fail':
              // Em caso de falha, exibe mensagem e botão para tentar novamente
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

// Funções do Redux, para obter o estado e chamar as actions
const mapStateToProps = state => ({
  characters: state.characters
})

const mapDispatchToProps = dispatch => {
  return {
    getCharacters: () => dispatch(getCharacters()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters);

// CSS-in-JS
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