import React from 'react';
import './NewItemForm.css'

const newItemForm = (props) => {
  return (
    <form className='NewItemForm'>
      <button>EXIT</button>
      <div>
        <input
          className='textInput'
          type='text'
          placeholder='Enter Title'
          value={props.title}
        >
        </input>

        <input
          className='textInput'
          type='text'
          placeholder='Enter Author'
          value={props.author}
        ></input>

        <input
          className='textInput'
          type='text'
          placeholder='Enter # of pages'
          value={props.pages}
        ></input>

      </div>
      <div>
        <input
          type='radio'
          name='read-status'
          value='read'
          checked={props.readStatus === true} />Read
        <input
          type='radio'
          name='read-status'
          value='unread'
          checked={props.readStatus === false} />Unread
      </div>
      <button>SUBMIT</button>
    </form>
  )
}

export default newItemForm;