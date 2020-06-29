import React from "react"
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import { PersistGate } from 'redux-persist/integration/react';
import configureMockStore from "redux-mock-store";

import { persistor } from '../../redux/store';

// Componente para ajustes na biblioteca de teste

// Setado um estado mock para o Redux, permitindo
// melhores testes relacionados aos estados
const mockStore = configureMockStore([thunk]);
const store = mockStore({
  comics: {
    status: 'success',
    comics: [
      {
        title: 'Spider-Man #1',
        description: 'Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko.',
        thumbnail: {
          path: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/b/b0/Spider-Man_FFH_Profile',
          extension: 'jpg'
        },
        creators: {
          items: [{
              name: 'Stan Lee',
              role: 'Creator'
            },
            {
              name: 'Steve Ditko',
              role: 'Creator'
            }
          ]
        }
      }
    ],
    selectedComic: {
      title: 'Spider-Man #1',
      description: 'Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko.',
      thumbnail: {
        path: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/b/b0/Spider-Man_FFH_Profile',
        extension: 'jpg'
      },
      creators: {
        items: [
          {
            name: 'Stan Lee',
            role: 'Creator'
          },
          {
            name: 'Steve Ditko',
            role: 'Creator'
          }
        ]
      }
    },
    limit: 10
  },
  characters: {
    status: 'success',
    characters: [
      {
        name: 'Spider-Man',
        thumbnail: {
          path: 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/b/b0/Spider-Man_FFH_Profile',
          extension: 'jpg'
        }
      }
    ]
  }
});

// Adicionado os componentes Provider, BrowserRouter e PersistGate no wrapper de testes,
// assim tornando desnecessário englobar eles em cada um dos testes
const AllTheProviders = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          {children}
        </PersistGate>
      </BrowserRouter>
    </Provider>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }