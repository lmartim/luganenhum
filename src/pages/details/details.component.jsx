import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from "styled-components";

import Title from '../../components/title/title.component';
import ComicDetail from '../../components/comic-detail/comic-detail.component';

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comic: props.comic
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      comic: props.comic
    }
  }

  render() {
    return ( 
      <DetailsContentBlock>
        <Title title={'DETALHES'} />
        <ComicDetail comic={this.state.comic} />
      </DetailsContentBlock>
    )
  }
};

const mapStateToProps = state => ({
  comic: state.comics.selectedComic
})

export default connect(mapStateToProps)(Details);

const DetailsContentBlock = styled.section`
  min-height: calc(100vh - 81px);
  background-color: white;
  border-top: 1px solid #393939;
  padding: 50px 0;
`;