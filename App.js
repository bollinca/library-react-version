import React from 'react';
import './App.css';

import BookCard from './BookCard/BookCard.js'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to Your Library!</h1>
        <BookCard />
        <BookCard />
      </header>
    </div>
  );
}

export default App;
