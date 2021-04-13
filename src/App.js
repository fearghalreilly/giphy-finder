import React, {useEffect, useState} from 'react'
import axios from 'axios'
import GlobalStyles from './components/GlobalStyles'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';


//pages
import HomePage from './pages/HomePage'
import MyFavouritesPage from './pages/MyFavouritesPage'
import AboutPage from './pages/AboutPage.js'

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
    <Switch>
          <Route exact path='/' component={HomePage} />  
          <Route path='/home' component={HomePage} />
          <Route path='/favourites' component={MyFavouritesPage} />
          <Route path='/about' component={AboutPage} />
  </Switch>
    </BrowserRouter>
    </AlertState>
    </GiphyState>
    </>
  );
}

export default App;
