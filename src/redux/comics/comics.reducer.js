// Estado inicial dos quadrinhos
export const INITIAL_STATE_COMICS = {
  selectedComic: [],
  comics: [],
  status: 'loading',
  limit: 10
}

// Reducer responsável por atualizar o estado dos quadrinhos
export function comicsReducer(state = INITIAL_STATE_COMICS, action) {
  switch (action.type) {
    case 'GET_COMICS_SUCCESS':
      return {
        ...state,
        comics: action.payload,
        status: 'success',
        limit: action.limit
      }
    case 'GET_COMICS_FAIL':
      return {
        ...state,
        comics: [],
        status: 'fail',
        limit: 10,
      }
    case 'LOAD_COMICS':
      return {
        ...state,
        comics: [],
        status: 'loading'
      }
    case 'SAVE_COMIC':
      return {
        ...state,
        selectedComic: action.payload
      }
    default:
      return state;
  }
}