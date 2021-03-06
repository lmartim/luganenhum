import React from 'react';
import { withRouter } from 'react-router-dom'
import styled from "styled-components";

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Columns, Container, Button } from 'react-bulma-components/dist';

// Componente responsável pela box de detalhes
// Receber as informações da HQ como prop
const ComicDetail = ({comic, history}) => (
  <Container>
    <ComicDetailBlock data-testid="comicDetailBlock" >
      <Columns>
        <Columns.Column size="two-fifths">
          {/* Exibe a capa da HQ */}
          <ComicDetailImage src={`${comic.thumbnail.path}/detail.${comic.thumbnail.extension}`} alt={comic.title} />
        </Columns.Column>
        <Columns.Column>
          <ComicDetailContent>
            <div>
              <ComicDetailText>
                {/* Exibe o título do quadrinho */}
                <b>Título</b>: {comic.title}
              </ComicDetailText>

              <ComicDetailText>
                {/* Exibe a descrição, quando ela existe, caso contrário, exibe a mensagem de indisponibilidade */}
                <b>Descrição</b>: {comic.description ? comic.description : 'Descrição indisponível'}
              </ComicDetailText>
              
              <ComicDetailText>
                {/* Faz uma listagem dos autores, caso os mesmo estejam disponíveis */}
                <b>{comic.creators.items.length > 1 ? 'Autores' : 'Autor'}</b>:<br />
                {
                  comic.creators.items.length >= 1 ? (
                    comic.creators.items.map((creator, index) => (
                      <span key={index}>- {creator.name} | {creator.role}<br /></span>
                    ))
                  ) : (
                      'Autor indisponível'
                    )
                }
              </ComicDetailText>
            </div>
            <ComicDetailButton>
              {/* Botão para voltar a listagem de quadrinhos */}
              <Button color="primary" onClick={() => history.push({ pathname: '/' })}>
                Voltar
              </Button>
            </ComicDetailButton>
          </ComicDetailContent>
        </Columns.Column>
      </Columns>
    </ComicDetailBlock>
  </Container>
)

export default withRouter(ComicDetail);

// CSS-in-JS
const ComicDetailBlock = styled.div`
  border: 1px solid #393939;
  border-radius: 5px;
  background: #202020;
  padding: 30px;
  box-shadow: 0px 9px 11px 2px rgba(161,161,161,1);
`;

const ComicDetailContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

const ComicDetailText = styled.div`
  margin-bottom: 10px;
  color: white;
`

const ComicDetailImage = styled.img`
  box-shadow: -5px 15px 13px -3px rgb(0, 0, 0);
  width: 100%;
`

const ComicDetailButton = styled.div`
  display: flex;
  margin-left: auto;
`