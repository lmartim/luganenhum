import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";

import ComicBox from '../comic-box/comic-box.component';
import LoaderIcon from '../loader-icon/loader-icon.component';

import { getComics } from '../../redux/comics/comics.actions';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button, Columns } from 'react-bulma-components/dist';

// Componente responsável pela listagem de quadrinhos
class ComicList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comics: props.comics,
      loadingMore: false
    }
  }

  // Atualizando o estado sempre que alguma informação por atualizada
  // Função getDerivedStateFromProps não estava permitindo a atualização 
  // da variável loadingMore, fazendo com que o load não fosse exibido
  UNSAFE_componentWillReceiveProps(props) {
    this.setState({
      comics: props.comics,
      loadingMore: false
    })
  }

  // static getDerivedStateFromProps(props) {
  //   return {
  //     comics: props.comics,
  //     loadingMore: false
  //   }
  // }

  // Função responsável por carregar mais quadrinhos. 
  // Ele ativa o ícone de carregamento e dispara uma action, 
  // para chamar 10 quadrinhos a mais
  loadMoreComics() {
    this.setState({
      loadingMore: true
    })
    console.log(this.state)
    this.props.getComics(this.state.comics.limit + 10)
  }

  render() {
    return (
      <ComicListBlock data-testid="comicListBlock">
        <Columns>
          {
            // Faz a listagem dos quadrinhos, chamando o componete ComicBox e passando as informações da HQ como prop
            this.state.comics.comics.map((comic, index) => (
              <Columns.Column key={index} size="one-fifth">
                <ComicBox comic={comic} />
              </Columns.Column>
            ))
          }
        </Columns>
        <ComicListBlockButton>
          {
            // Este bloco irá exibir o botão para carregar mais quadrinhos ou o ícone de carregamento, caso a função já tenha sido chamada
            !this.state.loadingMore ? (
              <Button color="primary" onClick={() => this.loadMoreComics()}>
                Carregar Mais
              </Button>
            ) : (
              <LoaderIcon />
            )
          }
        </ComicListBlockButton>
      </ComicListBlock>
    )
  }
};

// Funções do Redux, para obter o estado e chamar as actions
const mapStateToProps = state => ({
  comics: state.comics
})

const mapDispatchToProps = dispatch => {
  return {
    getComics: (limit) => dispatch(getComics(limit)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComicList);

// CSS-in-JS
const ComicListBlock = styled.section``

const ComicListBlockButton = styled.div`
  margin-top: 50px;
  text-align: center;
`