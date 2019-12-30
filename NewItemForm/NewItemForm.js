import React from 'react';
import './NewItemForm.css'

const newItemForm = (props) => {
  return (
    <form className='NewItemForm'>
      <button id='exit-button'
        onClick={props.exitClick}>EXIT</button>
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
          data-type='readStatus'
          type='radio'
          name='read-status'
          value={true}
          defaultChecked={props.readStatus === true}
          onClick={props.changed} />Read
        <input
          data-type='readStatus'
          type='radio'
          name='read-status'
          value={false}
          defaultChecked={props.readStatus === false}
          onClick={props.changed} />Unread
      </div>
      <button
        type='button'
        onClick={props.addBook}>Add</button>
    </form>
  )
}

export default newItemForm;