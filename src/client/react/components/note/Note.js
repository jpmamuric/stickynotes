import React from 'react'
import { DragSource } from 'react-dnd';

import '../../pages/css/StickyNote.css'
import './Note.css';

const Note = ({ note }) => {
  const { message, _id } = note
  const handleOnDragStart = (event) => {


  }

  const handleOnDragOver = (event) => {

  }

  const handleOnDrop = (event) => {

    
  }

  return (
    <div
      className='sticky_note flexbox'
      draggable='true'
      onDragStart={handleOnDragStart}
      onDragOver={handleOnDragOver}
      onDrop={handleOnDrop}>
      { message }
    </div>
  )
}

export default Note;
