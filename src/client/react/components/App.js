import React from 'react'
import { renderRoutes } from 'react-router-config';
import Header from './header/Header';
import { fetchUser } from '../../redux/actions/auth';

const App = ({ route }) => {
  return (
    <div>
      <Header />
      { renderRoutes(route.routes) }
    </div>
  )
}

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchUser())
}
