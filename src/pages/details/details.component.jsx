import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";

import Title from '../../components/title/title.component';
import ComicDetail from '../../components/comic-detail/comic-detail.component';

// Página responsábel pelos detalhes de uma HQ
// Exibe capa, título, descrição e autores
class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comic: props.comic
    }
  }

  // Atualizando o estado sempre que alguma informação por atualizada
  static getDerivedStateFromProps(props, state) {
    return {
      comic: props.comic
    }
  }

  render() {
    return ( 
      <DetailsContentBlock>
        {/* Chama o componente de título */}
        <Title title={'DETALHES'} />

        {/* Chama o componente responsábel pelo box de detalhes */}
        <ComicDetail comic={this.state.comic} />
      </DetailsContentBlock>
    )
  }
};

// Função do Redux, para obter o estado
const mapStateToProps = state => ({
  comic: state.comics.selectedComic
})

export default connect(mapStateToProps)(Details);

// CSS-in-JS
const DetailsContentBlock = styled.section`
  min-height: calc(100vh - 81px);
  background-color: white;
  border-top: 1px solid #393939;
  padding: 50px 0;
`;