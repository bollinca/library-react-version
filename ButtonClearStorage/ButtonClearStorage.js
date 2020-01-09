import React from 'react';

const buttonClearStorage = (props) => {
  const styleConst = {
    display: 'block',
    fontSize: '20px',
    margin: '20px auto',
    padding: '6px',
  }
  return (
    <button style={styleConst}
      onClick={props.clicked}>Clear Storage</button>
  )
}

export default buttonClearStorage;
