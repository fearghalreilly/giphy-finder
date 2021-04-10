import React, {useEffect, useState} from 'react'
import axios from 'axios'
import GlobalStyles from './components/GlobalStyles'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

//Components
import Nav from './components/Nav'
import TrendingGifs from './components/TrendingGifs'

//State
import GiphyState from './context/giphy/GiphyState'

function App() {
  



  return (
    <>
    <GiphyState>
    <BrowserRouter>
    <GlobalStyles />
    <Nav />
    <div>
      <h1>GIPHY FINDER</h1>
     <TrendingGifs />
    </div>
    </BrowserRouter>
    </GiphyState>
    </>
  );
}

export default App;
