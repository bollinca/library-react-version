import React, { Component } from 'react';
import './App.css';

import BookCard from './BookCard/BookCard.js'

class App extends Component {
  state = {
    books: [
      {title: "test",
       author: 'Mr. Author',
       pages: '142',
       readStatus: 'True'}
    ]
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Welcome to Your Library!</h1>
          <BookCard
            title={this.state.books[0].title}
            author={this.state.books[0].author}
            pages={this.state.books[0].pages}
            readStatus={this.state.books[0].readStatus} />
          <BookCard />
        </header>
      </div>
    );
  }
}

export default App;
