import React from 'react'

//Components
import Nav from '../components/Nav'
import About from '../components/About'

//animation
import {
    pageAnimation} from '../animation'
  import { motion } from 'framer-motion'

const AboutPage = () => {

    return (
        <motion.div exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show">
        <About />
        </motion.div>
        
    )
}

export default AboutPage;