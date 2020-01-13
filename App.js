import React, { Component } from 'react';
import './App.css';

import BookCards from './BookCards/BookCards';
import NewItemForm from './NewItemForm/NewItemForm';
import ButtonAddBook from './ButtonAddBook/ButtonAddBook';
import ButtonClearStorage from './ButtonClearStorage/ButtonClearStorage';
import ButtonSaveStorage from './ButtonSaveStorage/ButtonSaveStorage';
import ButtonLoadStorage from './ButtonLoadStorage/ButtonLoadStorage';

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
    defaultBooks: [
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
    });
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
    this.setState({ books: newBooks });
  }

  updateStorage = () => {
    window.localStorage.setItem('storedState', JSON.stringify(this.state.books))
  }

  loadStorage = () => {
    const newBooks = JSON.parse(localStorage.storedState)
    this.setState({ books: newBooks })
  }

  clearStorage = () => {
    if (window.confirm('Are you sure you want to reset all data?') === true) {
      this.setState({ books: this.state.defaultBooks });
    }
    window.localStorage.setItem('storedState', JSON.stringify(this.state.defaultBooks))
    window.location.reload();
  }

  libraryLoader = () => {
    if (localStorage.storedState !== JSON.stringify(this.state.defaultBooks)) {
      const userBookList = JSON.parse(window.localStorage.storedState)
      this.setState({ books: userBookList })
      this.updateStorage()
    }
    return this.state.books
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
          <div id='button-container'>
            <ButtonSaveStorage
              clicked={() => this.updateStorage()} />
            <ButtonLoadStorage
              clicked={() => this.loadStorage()} />
            <ButtonClearStorage
              clicked={() => this.clearStorage()} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
