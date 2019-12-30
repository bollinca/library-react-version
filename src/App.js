import React, { Component } from 'react';
import './App.css';

import BookCard from './BookCard/BookCard';
import NewItemForm from './NewItemForm/NewItemForm';
import ButtonAddBook from './ButtonAddBook/ButtonAddBook';
import ButtonClearStorage from './ButtonClearStorage/ButtonClearStorage';

class App extends Component {
  state = {
    books: [
      {
        title: 'test',
        author: 'Mr. Author',
        pages: '142',
        readStatus: true
      },
      {
        title: 'Test Number 2',
        author: 'Mrs. Author',
        pages: '155',
        readStatus: false
      },
    ],
    formData: {
      title: 'Lord Of The Wings',
      author: 'Wild Bill',
      pages: '12502',
      readStatus: true
    },
    formDisplayOn: false,
  }

  updateFormData = (event) => {
    let fieldSelector = event.target.dataset.type
    const formDataClone = { ...this.state.formData }
    formDataClone[fieldSelector] = event.target.value;
    if (fieldSelector === 'readStatus') {
      formDataClone[fieldSelector] = (formDataClone[fieldSelector] === 'true')
    }

    this.setState({
      formData: formDataClone
    })
  }

  submitClickHandler = () => {
    let newBooks = [...this.state.books];
    let newCard = {
      title: this.state.formData.title,
      author: this.state.formData.author,
      pages: this.state.formData.pages,
      readStatus: this.state.formData.readStatus
    }
    newBooks.push(newCard);

    this.setState({
      books: newBooks
    })
    this.toggleForm()
  }

  toggleForm = () => {
    this.setState({
      formDisplayOn: !this.state.formDisplayOn
    })
  }

  render() {

    let booksList = null;
    let readStatusDisplay = 'False';

    if (this.state.books) {
      booksList = (
        this.state.books.map((book, index) => {
          this.state.books[index].readStatus === true ? readStatusDisplay = 'True' : readStatusDisplay = 'False';
          return <BookCard
            title={this.state.books[index].title}
            author={this.state.books[index].author}
            pages={this.state.books[index].pages}
            readStatus={readStatusDisplay}
          />
        })
      )
    }

    let bookForm = null;

    if (this.state.formDisplayOn) {
      bookForm = (
        <NewItemForm
          title={this.state.formData.title}
          author={this.state.formData.author}
          pages={this.state.formData.pages}
          readStatus={this.state.formData.readStatus}
          changed={(e) => this.updateFormData(e)}
          exitClick={this.toggleForm}
          addBook={this.submitClickHandler}
        />
      )
    }

    return (
      <div className="App">
        <header>
          <h1>Welcome to Your Library!</h1>
        </header>
        <div>
          <ButtonAddBook
            clicked={() => this.toggleForm()}
          />
          {bookForm}
          {booksList}
          <ButtonClearStorage />
        </div>
      </div>
    );
  }
}

export default App;
