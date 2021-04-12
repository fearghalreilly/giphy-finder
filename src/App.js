import React, {useEffect, useState} from 'react'
import axios from 'axios'
import GlobalStyles from './components/GlobalStyles'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

//components
import Navigation from './components/Navigation'


//pages
import Home from './pages/Home'

//State
import GiphyState from './context/giphy/GiphyState'
import AlertState from './context/alert/AlertState'

function App() {
  



  return (
    <>
    <GiphyState>
    <AlertState>
    <BrowserRouter>
    <GlobalStyles />
    <Navigation />
    <Switch>
          <Route exact path='/' component={Home} />  
          <Route path='/home' component={Home} />
  </Switch>
    </BrowserRouter>
    </AlertState>
    </GiphyState>
    </>
  );
}

export default App;
