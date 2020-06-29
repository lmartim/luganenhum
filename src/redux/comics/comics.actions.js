import axios from 'axios';

// Recebendo variáveis de gateway e key do ambiente
const apiGateway = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY

// Action responsável por retornar os personagens, buscando a quantidade
// de quadrinhos, de acordo com a quantidade necessário pela paginação
export function getComics(limit) {
  return function(dispatch) {
    axios.get(`${apiGateway}/comics?apikey=${apiKey}&limit=${limit}`)
      .then(res => {
        dispatch({
          type: 'GET_COMICS_SUCCESS',
          payload: res.data.data.results,
          limit: limit
        })
      })
      .catch(err => {
        dispatch({
          type: 'GET_COMICS_FAIL'
        })
      })
  }
}

// Funções responsáveis por atualizar o status da página de quadrinhos
export const loadComics = () => ({
  type: 'LOAD_COMICS'
})

export const saveComic = (comic) => ({
  type: 'SAVE_COMIC',
  payload: comic
})

