# Luganenhum

Sendo apresentado em Guardiões da Galáxia, Luganenhum é a cabeça de um Celestial, que foi decepada a milhões de anos. Após ter sido como base de minerações por diversos anos, atualmente, serve como hub para troca e coleta de informações por diversas facções, entra elas, os Guardiões da Galáxia.

Se inspirando nas HQs, está aplicação pode ser usada para se obter algumas informações da Marvel Comics, como uma listagem e detalhes sobre diversos quadrinhos e uma breve pesquisa de personagens.

## Instalação

A instalação é bem simples, utilizando o gerenciador [yarn](https://yarnpkg.com/).

```yarn
yarn install
```

## Uso

Para rodar o projeto localmente, basta dar um start.

```yarn
yarn start
```
Após iniciar a aplicação, ela pode ser acessada em [localhost:3000](http://localhost:3000). Caso não esteja abrindo neste caminho, verifique o terminal para conseguir verificar a rota correta.

## Tecnologias
As principais tecnologias utilizadas nesta aplicação foram:

* [ReactJS](https://reactjs.org/)
* [Redux](https://redux.js.org/) (Gerenciamento de estado)
* [Bulma](https://bulma.io/) (Responsivo)
* [styled-components](https://styled-components.com/) (CSS-in-JS)
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) (Testes)

## API

Para a consulta de quadrinhos, são consumidas diversas APIs da Marvel Comics. Para mais informações, acesse a página [neste link](https://developer.marvel.com/).

## Testes

Uma breve cobertura de testes foi realizada, bastando rodar um comando, para executá-los:

```yarn
yarn test
```

## Arquivo .env

Normalmente, o arquivo .env não é comitado, tendo as variáveis ajustadas no deploy, de acordo com o ambiente. Para fins de testes, está arquivo está sendo enviado no momento.