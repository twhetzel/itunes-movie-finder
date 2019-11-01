import React, { Fragment } from 'react';
import './App.css';
import Movies from './Movies';
import AppBar from './AppBar';
import MovieSearch from './MovieSearch';

function App() {
  return (
    <Fragment>
      <AppBar />
      <Movies />

      <MovieSearch />
    </Fragment>
  );
}

export default App;
