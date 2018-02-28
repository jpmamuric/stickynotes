import React from 'react';

import App from './react/components/App';
import StickyNoteList from './react/pages/StickyNotePage';
import DashboardPage from './react/pages/UserList';
import NotFoundPage from './react/pages/NotFoundPage';

export default [
  {
    ...App,
    routes: [
      {
        path: '/',
        ...StickyNoteList,
        exact: true
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
