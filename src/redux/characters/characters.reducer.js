// Estado inicial dos personagens
export const INITIAL_STATE_CHARACTERS = {
  characters: [],
  status: 'loading',
}

// Reducer responsável por atualizar o estado dos personagens
export function charactersReducer (state = INITIAL_STATE_CHARACTERS, action) {
  switch (action.type) {
    case 'GET_CHARACTERS_SUCCESS':
      return {
        ...state,
        characters: action.payload,
        status: 'success',
      }
    case 'GET_CHARACTERS_FAIL':
      return {
        ...state,
        characters: [],
        status: 'fail',
      }
    default:
      return state;
  }
}