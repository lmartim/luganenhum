import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import styled from "styled-components";

import { saveComic } from '../../redux/comics/comics.actions';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components/dist';

// Componente responsável pelos boxes dos quadrinhos, exibidos na listagem
// Recebe uma prop com as informações da HQ
class ComicBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      comic: props.comic,
      history: props.history
    }
  }


  render() {
    const comic = this.state.comic

    return (
      // Ao clique, irá salvar as informações do quadrinho selecionado e ir para a página de detalhes
      <ComicBoxBlock data-testid="comicBoxBlock" onClick={() => { this.props.saveComic(comic); this.props.history.push({ pathname: '/detalhes' }); }}>

        {/* Exibe a imagem da capa da HQ */}
        <ComicBoxImage src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`} alt={comic.title} />

        {/* Faz uma listagem de até dois autores. Caso seja maior, 
        irá exiber a label 'diversos autores', para não quebrar tanto o layout */}
        <ComicBoxTitle>{comic.title}</ComicBoxTitle>
        {
          comic.creators.available < 3 ? (
            comic.creators.items.map((creator, index) => (
              <ComicBoxAuthor key={index}>{creator.name}</ComicBoxAuthor>
            ))
          ) : (
            <ComicBoxAuthor>Diversos Autores</ComicBoxAuthor>
          )
        }

        {/* Ovarlay exibido durante o mouse over, para indicar o click do componente */}
        <ComicBoxOverlay>
          <Button color="primary">
            Saber Mais
          </Button>
        </ComicBoxOverlay>
      </ComicBoxBlock>
    )
  }
}

// Função do Redux, para chamar as actions
const mapDispatchToProps = dispatch => {
  return {
    saveComic: (comic) => dispatch(saveComic(comic))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(ComicBox));

// CSS-in-JS
const ComicBoxOverlay = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255, .7);
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`

const ComicBoxBlock = styled.div`
  padding: 20px;
  border: 1px solid #393939;
  border-radius: 5px;
  background-color: #202020;
  height: 100%;
  box-shadow: 0px 9px 11px 2px rgba(161,161,161,1);
  position: relative;
  display: flex;
  flex-direction: column;
  &:hover ${ComicBoxOverlay} {
    display: flex;
    cursor: pointer;
  }
`

const ComicBoxImage = styled.img`
  @media(max-width: 1024px) {
    margin: 0 auto;
    width: 100%;
  }
`

const ComicBoxTitle = styled.div`
  text-align: center;
  color: white;
  font-weight: 800;
  margin-top: 5px;
`

const ComicBoxAuthor = styled.div`
  color: white;
  text-align: center;
`
