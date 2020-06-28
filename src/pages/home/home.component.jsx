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

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comics: props.comics
    }
    
  }

  componentDidMount() {
    this.props.getComics(10)
  }

  static getDerivedStateFromProps(props, state) {
    if (props.comics.status === 'loading') {
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
        <Title title={'QUADRINHOS'} />
        <Container>
          {(() => {
            switch (this.state.comics.status) {
              case 'loading':
                return (
                  <HomeContentBlockLoader>
                    <LoaderIcon/>
                  </HomeContentBlockLoader>
                )
              case 'success':
                return <ComicList />
              case 'fail':
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