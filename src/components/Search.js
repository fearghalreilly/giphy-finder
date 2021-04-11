import React, { useState, useContext } from 'react';
import GiphyContext from '../context/giphy/giphyContext';
import AlertContext from '../context/alert/alertContext';

//Styles
import styled from 'styled-components'


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
          type='submit'
          value='Search'
         
        />
      </form>
      {gifs.length > 0 && (
        <Button
          onClick={clearGifs}
        >
          Clear Search
        </Button>
      )}
      </SearchSection>
    </SearchContainer>
  )
};

export default Search;

const SearchContainer = styled.div`
  background: black;
  padding: 15px 0px;
 `

const SearchSection = styled.div`
    width: 40vw;
    margin: auto;
    display: grid;
  gap: 15px;
  grid-template-columns: 1fr;
  margin: auto;

`

const SearchInput = styled.input`
  width: 80%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border-radius: 10px;
  border: none;

  :focus {
    outline: none;

  }

`

const SubmitInput = styled.input`
  width: 25%;
  margin-left: -5%;
  padding: 0.4rem;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 10px;
  background-color: #884AF4;
  border: none;

  :focus {
    outline: none;
  }

`
const Button = styled.button`
padding: 0.4rem;
font-size: 1.2rem;
border-radius: 10px;
border: none;
cursor: pointer;

`

