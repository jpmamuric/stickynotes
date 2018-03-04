import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { Helmet }           from 'react-helmet';

import { fetchStickyNotes } from '../../redux/actions/sticky_notes';

import Note from '../components/note/Note';
import AddNote from '../components/note/AddNote';
import './css/StickyNote.css';

class StickyNoteList extends Component {
  componentDidMount(){
    this.props.fetchStickyNotes()
  }

  renderStickyNotes() {
    return this.props.list.map( note => {
      return <Note key={note._id} note={note} />
    });
  }

  render(){
    if(this.props.list.length === 0){
      return <div>loading users...</div>
    }

    return (
      <div>
        <Helmet>
          <title>{`${this.props.list.length} Sticky Notes in Dashboard`}</title>
          <meta property="og:title" content="Sticky Note App" />
        </Helmet>
        <AddNote clicked={this.props.isAdding}/>
        <div className='sticky_note_container flexbox'>
          { this.renderStickyNotes() }
        </div>

      </div>
    )
  }
}

const mapStateToProps = ({ stickynotes }) => {
  const { list, isAdding, text } = stickynotes;
  return { list, isAdding, text};
}

export default {
  component: connect(
    mapStateToProps,
    { fetchStickyNotes }
  )(StickyNoteList),
  loadData: ({ dispatch }) => dispatch(fetchStickyNotes())
}
