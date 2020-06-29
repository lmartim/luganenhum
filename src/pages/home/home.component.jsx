import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";

import ComicList from '../../components/comic-list/comic-list.component';
import LoaderIcon from '../../components/loader-icon/loader-icon.component';
import Title from '../../components/title/title.component';

import { getComics, loadComics } from '../../redux/comics/comics.actions';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button, Container } from 'react-bulma-components/dist';

import './home.styles.css'
import '../../utils/css/responsive.styles.scss'

// Page responsável pela primeira página do app
// Ela irá exibir uma lista dos quadrinhos
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comics: props.comics
    }
  }

  componentDidMount() {
    // Buscando os 10 primeiros quadrinhos da API
    this.props.getComics(10)
  }

  // Atualizando o estado sempre que alguma informação por atualizada
  static getDerivedStateFromProps(props, state) {
    if (props.comics.status === 'loading') {
      // Verifica o estado da página, para atualizar a quantidade de HQs
      props.getComics(state.comics.limit)
      return null
    }

    return {
      comics: props.comics
    }
  }

  render() {
    return (
      <HomeContentBlock>
        {/* Chama o componente de título */}
        <Title title={'QUADRINHOS'} />
        <Container>
          {(() => {
            switch (this.state.comics.status) {
              case 'loading':
                // Caso status seja loading, exiber ícone de carregamento
                return (
                  <HomeContentBlockLoader>
                    <LoaderIcon/>
                  </HomeContentBlockLoader>
                )
              case 'success':
                // Rendereza listagem de quadrinhos, em caso de status sucesso
                return <ComicList />
              case 'fail':
                // Em caso de falha, exibe mensagem e botão para tentar novamente
                return (
                  <HomeContentBlockFail>
                    Não foi possível obter os dados
                    <Button className='failcontentblock__button--state-fail' color="primary" onClick={() => this.props.loadComics()}>
                      Tentar novamente
                    </Button>
                  </HomeContentBlockFail>
                )
              default:
                return null;
            }
          })()}
        </Container>
      </HomeContentBlock>
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
    loadComics: () => dispatch(loadComics())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// CSS-in-JS
const HomeContentBlock = styled.section`
  min-height: calc(100vh - 81px);
  background-color: white;
  border-top: 1px solid #393939;
  padding: 50px 0;
`;

const HomeContentBlockLoader = styled.div`
  margin-top: 150px;
`

const HomeContentBlockFail = styled.div`
  color: #202020;
  text-align: center;
  margin-top: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
`