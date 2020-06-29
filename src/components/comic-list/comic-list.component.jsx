import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";

import ComicBox from '../comic-box/comic-box.component';
import LoaderIcon from '../loader-icon/loader-icon.component';

import { getComics } from '../../redux/comics/comics.actions';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button, Columns } from 'react-bulma-components/dist';

class ComicList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comics: props.comics,
      loadingMore: false
    }
  }

  // static getDerivedStateFromProps(props) {
  //   return {
  //     comics: props.comics,
  //     loadingMore: false
  //   }
  // }

  UNSAFE_componentWillReceiveProps(props) {
    this.setState({
      comics: props.comics,
      loadingMore: false
    })
  }

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
            this.state.comics.comics.map((comic, index) => (
              <Columns.Column key={index} size="one-fifth">
                <ComicBox comic={comic} />
              </Columns.Column>
            ))
          }
        </Columns>
        <ComicListBlockButton>
          {
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

const mapStateToProps = state => ({
  comics: state.comics
})

const mapDispatchToProps = dispatch => {
  return {
    getComics: (limit) => dispatch(getComics(limit)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComicList);

const ComicListBlock = styled.section``

const ComicListBlockButton = styled.div`
  margin-top: 50px;
  text-align: center;
`