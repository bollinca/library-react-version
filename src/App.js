import React, { Component } from 'react';
import './App.css';

import BookCards from './BookCards/BookCards';
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
    let previousTitles = this.state.books.map(book => book.title)
    if (previousTitles.includes(this.state.formData.title)) {
      throw Error('Title already in use, not permitted since name is used as key.')
    }

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

  cardDeleteHandler = (index) => {
    const newBooks = [...this.state.books];
    newBooks.splice(index, 1);
    this.setState({books: newBooks})
  }

  render() {

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
          <BookCards
            books={this.state.books}
            clickedDelete={this.cardDeleteHandler} />
          <ButtonClearStorage />
        </div>
      </div>
    );
  }
}

export default App;
