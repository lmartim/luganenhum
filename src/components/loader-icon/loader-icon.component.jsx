import React from 'react';
import styled, { keyframes } from "styled-components";

// Componente que exibe um ícone de loading e mensagem de carregamento
const LoaderIcon = () => (
  <LoaderBlock>
    <Icon />
    Carregando
  </LoaderBlock>
)

// CSS-in-JS
const LoaderBlock = styled.div`
  color: #202020;
  text-align: center;
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Icon = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: 2px solid #202020;
  border-right: 2px solid #202020;
  border-bottom: 2px solid #202020;
  border-left: 4px solid red;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: 0 auto 10px;
`;

export default LoaderIcon;