import React from 'react';
import './NewItemForm.css'

const newItemForm = (props) => {
  return (
    <form className='NewItemForm'>
      <button>EXIT</button>
      <div>
        <input
          data-type='title'
          className='textInput'
          type='text'
          placeholder='Enter Title'
          value={props.title}
          onChange={props.changed}
        >
        </input>

        <input
          data-type='author'
          className='textInput'
          type='text'
          placeholder='Enter Author'
          value={props.author}
          onChange={props.changed}
        ></input>

        <input
          data-type='pages'
          className='textInput'
          type='text'
          placeholder='Enter # of pages'
          value={props.pages}
          onChange={props.changed}
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