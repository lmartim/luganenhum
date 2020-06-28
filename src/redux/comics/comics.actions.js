import axios from 'axios';

const apiGateway = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY

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

export const loadComics = () => ({
  type: 'LOAD_COMICS'
})

export const saveComic = (comic) => ({
  type: 'SAVE_COMIC',
  payload: comic
})

