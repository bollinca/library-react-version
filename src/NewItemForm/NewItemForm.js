import React from 'react';
import './NewItemForm.css'

const newItemForm = () => {
  return (
    <form className='NewItemForm'>
      <button>EXIT</button>
      TITLE:<input></input>
      AUTHOR:<input></input>
      PAGES:<input></input>
      STATUS TOGGLE
      <button>SUBMIT</button>
    </form>
  )
}

export default newItemForm;