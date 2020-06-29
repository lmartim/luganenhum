import React from 'react';
import { withRouter } from 'react-router-dom'
import styled from "styled-components";

// Componente com o header da aplicação
// Exibe um logo e um menu com duas opções
const Header = ({history}) => {
  return (
  <HeaderBlock>
    <HeaderBlockTitle onClick={() => history.push({ pathname: '/' })}>
      LUGANENHUM
    </HeaderBlockTitle>
    <HeaderBlockDescription>
      <HeaderBlockDescriptionLink onClick={() => history.push({ pathname: '/' })}>
        QUADRINHOS
      </HeaderBlockDescriptionLink>
      <HeaderBlockDescriptionLink onClick={() => history.push({ pathname: '/personagens' })}>
        PERSONAGENS
      </HeaderBlockDescriptionLink>
    </HeaderBlockDescription>
  </HeaderBlock>
  )
}

export default withRouter(Header);

// CSS-in-JS
const HeaderBlock = styled.section`
  background-color: #202020;
  width: 100%;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const HeaderBlockTitle = styled.h1`
  margin: 0;
  padding: 3px 5px;
  color: white;
  background: red;
  font-family: 'Titillium Web';
  font-weight: 800;
  font-size: 36px;
  &:hover {
    cursor: pointer;
  }
`;

const HeaderBlockDescription = styled.div`
  width: 100%;
  border-top: 1px solid #393939;
  text-align: center;
  color: white;
  font-family: 'Roboto';
  padding: 10px 0;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const HeaderBlockDescriptionLink = styled.div`
  margin: 0 25px;
  position: relative;
  &:hover {
    cursor: pointer;
    &:after {
      content: '';
      display: block;
      background: red;
      position: absolute;
      height: 3px;
      width: 100%;
      bottom: -11px;
    }
  }
`