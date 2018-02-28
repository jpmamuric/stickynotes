import React, { Component } from 'react';
import { connect }          from 'react-redux';

import { fetchStickyNotes } from '../../redux/actions/sticky_notes';
import { Helmet } from 'react-helmet';
import './css/StickyNote.css';

class StickyNoteList extends Component {
  componentDidMount(){
    this.props.fetchStickyNotes()
  }

  renderStickyNotes() {
    return this.props.list.map( note => {
      return <div key={note._id} className='sticky_note flexbox'>{note.message}</div>
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
        <div className='sticky_note_container flexbox'>
          { this.renderStickyNotes() }
        </div>

      </div>
    )
  }
}

const mapStateToProps = ({ stickynotes }) => {
  const { list } = stickynotes;
  return { list };
}

export default {
  component: connect(mapStateToProps, { fetchStickyNotes })(StickyNoteList),
  loadData: ({ dispatch }) => dispatch(fetchStickyNotes())
}
