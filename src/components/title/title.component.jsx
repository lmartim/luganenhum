import React from 'react';
import styled from "styled-components";

const Title = ({title}) => (
  <TitleBlock>
    <h1 data-testid="title">{title}</h1>
  </TitleBlock>
)

const TitleBlock = styled.div`
  color: #202020;
  text-align: center;
  margin-bottom: 50px;
  font-family: 'Titillium Web';
  font-size: 36px;
`

export default Title;