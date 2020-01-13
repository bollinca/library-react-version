import React from 'react';

const buttonClearStorage = (props) => {
  const styleConst = {
    display: 'inline-block',
    fontSize: '20px',
    margin: '20px auto 20px 20px',
    padding: '6px',
  }
  return (
    <button style={styleConst}
      onClick={props.clicked}>Clear Storage</button>
  )
}

export default buttonClearStorage;
