import React, { useState, useContext } from 'react';
import GiphyContext from '../context/giphy/giphyContext';


const Search = () => {

const giphyContext = useContext(GiphyContext)
  
const { searchGifs  } = giphyContext;

 const [text, setText] = useState('');

const onSubmit = e => {
    e.preventDefault();
      searchGifs(text);
      setText('');
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Gifs...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
        />
      </form>
    </div>
  )
};

export default Search;