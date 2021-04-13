import React from 'react'

//Page Components
import Navigation from '../components/Navigation'
import TrendingGifs from '../components/TrendingGifs'
import Gifs from '../components/Gifs'
import Modal from '../components/Modal'


const HomePage = () => {
    return (
        <>
        <Navigation />
        <TrendingGifs />
        <Gifs />
        <Modal />
        </>

    )
}

export default HomePage;