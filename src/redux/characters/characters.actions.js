import axios from 'axios';

const apiGateway = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY

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