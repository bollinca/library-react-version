import React from 'react';
import './BookCard.css';

const bookCard = (props) => {
  return (
    <div className='BookCard'>
      <button>X</button>
      <h2>Book: {props.title}</h2>
      <p>Author: {props.author}</p>
      <p>Pages: {props.pages}</p>
      <p>Finished Reading: {props.readStatus}</p>
    </div>
  )
}

export default bookCard