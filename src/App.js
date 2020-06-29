import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Home from './pages/home/home.component';
import Details from './pages/details/details.component';
import Characters from './pages/characters/characters.component';

// Configurado as rotas do projeto e seus respectivos componentes
// Também é adicionado o Header no topo da aplicação
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/detalhes' component={Details} />
        <Route exact path='/personagens' component={Characters} />
      </Switch>
    </div>
  );
}

export default App;
