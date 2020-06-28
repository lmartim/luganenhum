import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import styled from "styled-components";

import { saveComic } from '../../redux/comics/comics.actions';

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components/dist';

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
      <ComicBoxBlock data-testid="comicBoxBlock" onClick={() => { this.props.saveComic(comic); this.props.history.push({ pathname: '/detalhes' }); }}>
        <ComicBoxImage src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`} alt={comic.title} />
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
        <ComicBoxOverlay>
          <Button color="primary">
            Saber Mais
          </Button>
        </ComicBoxOverlay>
      </ComicBoxBlock>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveComic: (comic) => dispatch(saveComic(comic))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(ComicBox));

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
