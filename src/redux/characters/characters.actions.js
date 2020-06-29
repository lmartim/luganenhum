import axios from 'axios';

// Recebendo variáveis de gateway e key do ambiente
const apiGateway = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY

// Action responsável por retornar os personagens, buscando os personagens
// pela configurações básicas de API.
export function getCharacters() {
  return function (dispatch) {
    axios.get(`${apiGateway}/characters?apikey=${apiKey}`)
      .then(res => {
        dispatch({
          type: 'GET_CHARACTERS_SUCCESS',
          payload: res.data.data.results,
        })
      })
      .catch(err => {
        dispatch({
          type: 'GET_CHARACTERS_FAIL'
        })
      })
  }
}

// Action que realiza busca por um personagem específicio.
export function getCharacter(character) {
  return function (dispatch) {
    axios.get(`${apiGateway}/characters?apikey=${apiKey}&name=${character}`)
      .then(res => {
        dispatch({
          type: 'GET_CHARACTERS_SUCCESS',
          payload: res.data.data.results,
        })
      })
      .catch(err => {
        dispatch({
          type: 'GET_CHARACTERS_FAIL'
        })
      })
  }
}