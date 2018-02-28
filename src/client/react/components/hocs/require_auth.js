import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default ComposedComponent => {
  class Authentication extends Component {
    render(){
      switch (this.props.user) {
        case false:
          return <Redirect to='/' />
        case null:
          return <div>Loading...</div>
        default:
          return <ComposedComponent {...this.props} />
      }
    }
  }

  const mapStateToProps = ({ auth }) => {
    const { user } = auth;
    return { user };
  }

  return connect(mapStateToProps)(Authentication);
}
