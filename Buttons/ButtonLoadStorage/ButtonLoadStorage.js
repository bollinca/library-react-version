import React from 'react';

const buttonLoadStorage = (props) => {
  const styleConst = {
    display: 'inline-block',
    fontSize: '20px',
    margin: '20px auto 20px 20px',
    padding: '6px',
  }
  return (
    <button style={styleConst}
      onClick={props.clicked}>Load Storage</button>
  )
}

export default buttonLoadStorage;