import React from 'react';
import BookCard from './BookCard/BookCard';

const bookCards = (props) => {

  let readStatusDisplay = 'False';

  return (props.books.map((book, index) => {
    book.readStatus === true ? readStatusDisplay = 'True' : readStatusDisplay = 'False';
    return <BookCard
      componentWillMount={props.loader}
      clickedDelete={() => props.clickedDelete(index)}
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