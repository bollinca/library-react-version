import React, { Component } from 'react';
import './App.css';

import BookCard from './BookCard/BookCard'
import NewItemForm from './NewItemForm/NewItemForm'

class App extends Component {
  state = {
    books: [
      {
        title: "test",
        author: 'Mr. Author',
        pages: '142',
        readStatus: 'True'
      },
      {
        title: "Test Number 2",
        author: 'Mrs. Author',
        pages: '155',
        readStatus: 'True'
      },
    ]
  }

  render() {

    let booksList = null;

    if (this.state.books) {
      booksList = (
        this.state.books.map((book, index) => {
          return <BookCard
            title={this.state.books[index].title}
            author={this.state.books[index].author}
            pages={this.state.books[index].pages}
            readStatus={this.state.books[index].readStatus}
          />
        })
      )
    }

    return (
      <div className="App">
        <header>
          <h1>Welcome to Your Library!</h1>
        </header>
        <div>
          <NewItemForm />
          {booksList}
        </div>
      </div>
    );
  }
}

export default App;
