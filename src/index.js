import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY =  'AIzaSyC8gv_xXhkCUoT6ZA7WAuxMqRaGnpFLRmA'

const App = () => {
  return ( 
  <div>
    <SearchBar />
  </div> 
  );
}

ReactDom.render(<App></App>, document.querySelector('.container'));
