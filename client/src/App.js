import React from 'react';
import './App.css';
import Inicial from './components/Inicial/Inicial';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import NavBar from './components/NavBar/NavBar';
import Form from './components/Form/Form';

import { Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Route exact path='/'>
        <Inicial />
      </Route>
      <NavBar />
      <Route exact path='/home'>
        <Home />
      </Route>
      <Route exact path='/videogame/:id' component={Detail} />
      <Route exact path='/creategame' component={Form} />
    </div>
  );
}

export default App;
