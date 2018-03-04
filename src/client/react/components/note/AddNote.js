import React from 'react'
import { connect } from 'react-redux'

import { addStickyNote } from '../../../redux/actions/sticky_notes';

import '../../pages/css/StickyNote.css'
import './Note.css';

const AddNote = ({ addStickyNote, clicked }) => {

  return (
    <div
      className={'add_sticky_note flexbox'}
      onClick={()=>addStickyNote()} >
      { clicked
        ? <textarea className='input_sticky_note' placeholder='type something here'/>
        : <div>+</div>
      }
    </div>
  )
}



export default connect(null, { addStickyNote})(AddNote);
