import React, {useEffect, useState} from 'react'
import axios from 'axios'
import GlobalStyles from './components/GlobalStyles'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

//Components
import Nav from './components/Nav'
import TrendingGifs from './components/TrendingGifs'
import Search from './components/Search'
import Gifs from './components/Gifs'
import Alert from './components/Alert'
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
    <Nav />
    <div>
      <Alert />
      <Search />
     <TrendingGifs />
     <Gifs />
    </div>
    </BrowserRouter>
    </AlertState>
    </GiphyState>
    </>
  );
}

export default App;
