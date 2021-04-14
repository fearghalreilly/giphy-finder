import React from 'react'

//Components
import Favourites from  '../components/Favourites'

//animation
import {
    pageAnimation} from '../animation'
  import { motion } from 'framer-motion'



const MyFavouritesPage = () => {
    return (
      
<motion.div exit="exit"
variants={pageAnimation}
initial="hidden"
animate="show">
     <Favourites />
</motion.div>

    )
}

export default MyFavouritesPage;