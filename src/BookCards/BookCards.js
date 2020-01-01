import React from 'react';
import BookCard from './BookCard/BookCard';

const bookCards = (props) => {

  let readStatusDisplay = 'False';

  const cardDeleteHandler = (bookIndex) => {
    console.log(bookIndex);
  }

  return (props.books.map((book, index) => {
    book.readStatus === true ? readStatusDisplay = 'True' : readStatusDisplay = 'False';
    return <BookCard
      clickedDelete={() => cardDeleteHandler(index)}
      title={book.title}
      key={book.title}
      author={book.author}
      pages={book.pages}
      readStatus={readStatusDisplay}
    />
  })
  )
}
export default bookCards