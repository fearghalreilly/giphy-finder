import React from 'react'

//Page Components
import TrendingGifs from '../components/TrendingGifs'
import Gifs from '../components/Gifs'
import Modal from '../components/Modal'

//animation
import {
    pageAnimation} from '../animation'
  import { motion } from 'framer-motion'


const HomePage = () => {
    return (
       <>
       
        <motion.div exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show">
        <TrendingGifs />
        <Gifs />
        <Modal />
        </motion.div>
        </>

    )
}

export default HomePage;