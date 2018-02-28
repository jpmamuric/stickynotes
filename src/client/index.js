import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { renderRoutes } from 'react-router-config'
import axios from 'axios';
import reducers from './redux/reducers/index';
import Routes from './routes';

const axiosInstance = axios.create({
  baseURL: '/api'
});

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  )
)

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter >
      <div>{ renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
