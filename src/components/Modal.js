import React, { useContext } from 'react'

//Context
import GiphyContext from '../context/giphy/giphyContext';

//Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSave,
  faTimes,
 
  } from "@fortawesome/free-solid-svg-icons"


//Styles
import styled from 'styled-components'

const Modal = () => {
    const giphyContext = useContext(GiphyContext);

    const { modalContent, favourites, addFavourites, deleteFav, clearModalContent } = giphyContext;

    //Add Gif to Favourites
    const handleGifFav= gif => {

        if ( favourites.includes(gif)) 
        {
         return false;
        } else {
          addFavourites(gif)
        }
      } 

   
      

    return (
        <>
            {modalContent && (
   <ModalShadow>   
         
  <Detail>
  
  <div>
  <FontAwesomeIcon icon={faTimes} color="white" size="2x"  onClick={() => clearModalContent()} />
  </div> 
  
  <GifSection>
    <img src={modalContent.images.fixed_height.url}></img>
  </GifSection>

  <ButtonSection>
    {!favourites.includes(modalContent) ? (<button onClick={() => handleGifFav(modalContent)}>Add to Favourites</button>) : (<button onClick={() => deleteFav(modalContent.id)}>Remove from Favourites</button>)}
  </ButtonSection>

    </Detail>
    </ModalShadow>    
 
  )}

        </>
    )
}

export default Modal;

const ModalShadow = styled.div`
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;

  
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }


`
const Detail = styled.div`
  background: transparent;
  z-index: 12;
  margin: auto;
  border-color: #884AF4;
  max-width: 350px;
 width: 100%;
  padding: 0px 10px;

  div {
    display: flex;
    justify-content: flex-end;
   
  }
  
`;

const GifSection = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
background-color: transparent;
border-radius: 10px;
border-style: solid;
border-color:  #884AF4; 

img {
  
    border-radius:10px;
    object-fit: cover;
}
`;

const ButtonSection = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-color: #884AF4;
cursor: pointer;


button {

background-color: #884AF4;
  border: none;
  color: white;
  padding: 15px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px 0px;
  cursor: pointer;
  border-radius: 10px;
  width: 100%;
  outline: none;
  font-size: 20px;
  letter-spacing: 1.5px;

  @media screen and (max-width: 765px) {
  font-size: 20px;

  }

 }

`;

