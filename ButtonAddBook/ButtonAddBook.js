import React from 'react';

const buttonAddBook = (props) => {
  const styleConst = {
    display: 'block',
    fontSize: '20px',
    margin: '20px auto',
    padding: '6px',
  }

  return (
    <button
      style={styleConst}
      onClick={props.clicked}
    >Add Book</button>
  )
}

export default buttonAddBook;
