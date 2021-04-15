import React, { useContext } from 'react'

//Context
import GiphyContext from '../context/giphy/giphyContext';

//Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSave,
  } from "@fortawesome/free-solid-svg-icons";

//Styles
import styled from 'styled-components'

//Animations
import { motion , AnimatePresence} from "framer-motion";
import {
  tap,
  fade,
} from "../animation";

const Favourites = () => {
  const giphyContext = useContext(GiphyContext);

    const { favourites , deleteFav } = giphyContext;

 
    return (
        <>
        <AnimatePresence exitBeforeEnter>
          <FavouritesContainer>
            {!favourites.length > 0  ? (
            
               <AlertContainer variants={fade}
               initial='hidden'
               animate='show'
               exit='hidden'>
               <AlertSection>
                 <IconContainer>
               <FontAwesomeIcon icon={faSave} color="#fff" size="2x"  />
               </IconContainer>
               <p>Oops, you don't have any favourites saved!</p>
               </AlertSection>
             </AlertContainer>
             
          
            ) : ( <>
            <FavouritesSection
              >
              {favourites.map((fav) =>{
                return(
                <FavouriteGif variants={fade}
                initial='hidden'
                animate='show'
                exit='hidden'
                  >
                    <img src={fav.images.fixed_width.url}></img>
                  <motion.button variants={tap}  whileTap='tap' onClick={() => deleteFav(fav.id)}>Remove</motion.button>
                </FavouriteGif>
                )} )} 
                </FavouritesSection>
                </>
                )}


          
          </FavouritesContainer>
          </AnimatePresence>
        </>
    )
}

export default Favourites;

const FavouritesContainer = styled.div`
  background: black;
  padding: 15px 100px 15px 100px;
  width: 100%;
  height: 100%;
  
  @media screen and (max-width: 1080px) {
  padding: 15px 55px 15px 55px;
  }

  @media screen and (max-width: 765px) {
  padding: 15px 35px 15px 35px;
  }
 `

 const AlertContainer = styled(motion.div)`

`

const AlertSection = styled.div`
 background: #884AF4;
 border-radius: 10px;
 margin: auto;
 display: flex;
 align-items: center;
 justify-content: start;
 width: 50%;

 
 @media screen and (max-width: 1080px) {
   width: 100%;
 }


 
 
 p {
   color: white;
   padding: 20px 15px 20px 20px;
   font-size: 22px;
   letter-spacing: 1.5px;

   @media screen and (max-width: 765px) {
  font-size: 20px;

  }
  

 }

`
const IconContainer = styled.div`
 padding-left: 15px;

`


const FavouritesSection = styled(motion.div)`
 display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr;
 grid-gap: 30px;
 padding-top: 10px;

   
 @media screen and (max-width: 770px) {
  grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 765px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr;
  }

`
const FavouriteGif = styled(motion.div)`
   display: flex;
   flex-direction: column;
   width: 100%;
  
 img {

  object-fit: cover;
  border-radius: 10px;
  width: 100%;
  height: 350px;
 
 
 }

 button {

background-color: #884AF4;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px 0px;
  cursor: pointer;
  border-radius: 10px;
  outline: none;
  font-size: 22px;
  letter-spacing: 1.5px;
  cursor: pointer;

  

  @media screen and (max-width: 765px) {
  font-size: 20px;

  }

 }


 `