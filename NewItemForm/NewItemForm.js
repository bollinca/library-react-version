import React from 'react';
import './NewItemForm.css'

const newItemForm = () => {
  return (
    <form className='NewItemForm'>
      <button>EXIT</button>
      <div>
        <input className='textInput' type='text' placeholder='Enter Title'></input>
        <input className='textInput' type='text' placeholder='Enter Author'></input>
        <input className='textInput' type='text' placeholder='Enter # of pages'></input>
      </div>
      <div>
        <input type='radio' name='read-status' value='read' />Read
        <input type='radio' name='read-status' value='unread' />Unread
      </div>
      <button>SUBMIT</button>
    </form>
  )
}

export default newItemForm;