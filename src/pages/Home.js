import React from 'react'

//Page Components
import TrendingGifs from '../components/TrendingGifs'
import Gifs from '../components/Gifs'
import Modal from '../components/Modal'


const HomePage = () => {
    return (
        <>
        <TrendingGifs />
        <Gifs />
        <Modal />
        </>

    )
}

export default HomePage;