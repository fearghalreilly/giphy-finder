import React, {useEffect, useState} from 'react'
import axios from 'axios'
import GlobalStyles from './components/GlobalStyles'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

//pages
import HomePage from './pages/HomePage'
import MyFavouritesPage from './pages/MyFavouritesPage'
import AboutPage from './pages/AboutPage.js'
import NotFoundPage from './pages/NotFoundPage'

//State
import GiphyState from './context/giphy/GiphyState'
import AlertState from './context/alert/AlertState'

//ScrollTop
import ScrollTop from './components/ScrollTop'

//Animate Presence
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';

function App() {
  



  return (
    <>
    <GiphyState>
    <AlertState>
    <BrowserRouter>
    <ScrollTop />
    <GlobalStyles />
    <Navigation />
    <AnimatePresence exitBeforeEnter>
    <Switch>
          <Route exact path='/' component={HomePage} />  
          <Route path='/favourites' component={MyFavouritesPage} />
          <Route path='/about' component={AboutPage} />
          <Route component={NotFoundPage} />
  </Switch>
  </AnimatePresence>
    </BrowserRouter>
    </AlertState>
    </GiphyState>
    </>
  );
}

export default App;
