import React from 'react';
import './App.css';
import Inicial from './components/Inicial/Inicial';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';
import NavBar from './components/NavBar/NavBar';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

import { Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Route exact path='/'>
        <Inicial />
      </Route>
      <Route exact path='/home'>
        <NavBar />
        <Home />
      </Route>
      <Route exact path='/videogame/:id'>
        <NavBar />
        <Detail />
      </Route>
      <Route exact path='/creategame'>
        <NavBar />
        <Form />
      </Route>
      <Route exact path='/favorites'>
        <NavBar />
        <Favorites />
      </Route>
    </div>
  );
}

export default App;
