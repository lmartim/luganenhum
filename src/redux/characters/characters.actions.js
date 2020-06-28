import axios from 'axios';

const apiGateway = 'http://gateway.marvel.com/v1/public';
const apiKey = 'f1dd356377190812ef6ddeaf6bae2550'

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