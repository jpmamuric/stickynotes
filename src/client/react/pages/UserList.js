import React, { Component } from 'react';
import { connect }          from 'react-redux';

import { fetchUsers } from '../../redux/actions/user';
import requireAuth from '../components/hocs/require_auth';
import { Helmet } from 'react-helmet';

class UserList extends Component {
  componentDidMount(){
    this.props.fetchUsers()
  }

  renderUsers() {
    return this.props.list.map( user => {
      return <div key={user.id}>{user.name}</div>
    });
  }

  render(){
    if(this.props.list.length === 0){
      return <div>loading users...</div>
    }

    return (
      <div>
        <Helmet>
          <title>{`${this.props.list.length} Users in Portfolio Dashboard`}</title>
          <meta property="og:title" content="Portfolio Dashboard" />
        </Helmet>
        { this.renderUsers() }
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
  const { list } = users;
  return { list };
}

export default {
  component: connect(mapStateToProps, { fetchUsers })(requireAuth(UserList)),
  loadData: ({ dispatch }) => dispatch(fetchUsers())
}
