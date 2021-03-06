import React, { useState, useContext } from 'react';
import GiphyContext from '../context/giphy/giphyContext';
import AlertContext from '../context/alert/alertContext';

//Styles
import styled from 'styled-components'

//Animations
import { motion , AnimatePresence} from "framer-motion";
import {
  tap,
  fade,
} from "../animation";



const Search = () => {

const giphyContext = useContext(GiphyContext)
const alertContext = useContext(AlertContext)
  
const { searchGifs, gifs, clearGifs  } = giphyContext;
const { setAlert } = alertContext;


 const [text, setText] = useState('');

const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
        setAlert()
    } else {
      searchGifs(text);
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <>
    <AnimatePresence exitBeforeEnter>
    <SearchContainer>
      <SearchSection>
      <form onSubmit={onSubmit} >
        <SearchInput
          type='text'
          name='text'
          placeholder='Search Gifs...'
          value={text}
          onChange={onChange}
         
        />
        <SubmitInput 
         variants={tap}  whileTap='hover'
          type='submit'
          value='Search'
          title='alertbtn'
         
        />
      </form>
      {gifs.length > 0 && (
        <Button  variants={fade}
        initial='hidden'
        animate='show'
        exit='hidden'
          onClick={clearGifs}
        >
          Clear Search
        </Button>
      )}
      </SearchSection>
    </SearchContainer>
    </AnimatePresence>
    </>
  )
 
};

export default Search;

const SearchContainer = styled(motion.div)`
  background: black;
  padding: 15px 100px 15px 100px;
  width: 100%;
  position: sticky;

  @media screen and (max-width: 1080px) {
  padding: 15px 55px 15px 55px;
  }

  @media screen and (max-width: 765px) {
  padding: 15px 35px 15px 35px;
  }
 `

const SearchSection = styled.div`
  width: 50%;
  margin: auto;
  display: grid;
  gap: 15px;
  grid-template-columns: 1fr;
  margin: auto;

  @media screen and (max-width: 1080px) {
    width: 100%;
  }

 

`

const SearchInput = styled(motion.input)`
  width: 80%;
  padding: 0.4rem;
  border-radius: 10px;
  border: none;
  font-size: 22px;
  letter-spacing: 1.5px;

  
@media screen and (max-width: 765px) {
  font-size: 20px;
  width: 75%;
  }

  :focus {
    outline: none;

  }

`

const SubmitInput = styled(motion.input)`
  width: 25%;
  margin-left: -5%;
  padding: 0.4rem;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 10px;
  background-color: #884AF4;
  border: none;
  color: white;
  font-size: 22px;
  letter-spacing: 1.5px;

  
@media screen and (max-width: 765px) {
  font-size: 20px;
  width: 30%;
  }

  :focus {
    outline: none;
  }

`
const Button = styled(motion.button)`
padding: 0.4rem;
font-size: 1.2rem;
border-radius: 10px;
border: none;
cursor: pointer;
background: white;
font-size: 22px;
letter-spacing: 1.5px;
outline: none;

@media screen and (max-width: 765px) {
  font-size: 20px;
  }


`

