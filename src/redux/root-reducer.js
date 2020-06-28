import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {comicsReducer} from './comics/comics.reducer';
import {charactersReducer} from './characters/characters.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['comics']
}

const rootReducer = combineReducers({
  comics: comicsReducer,
  characters: charactersReducer
});

export default persistReducer(persistConfig, rootReducer);