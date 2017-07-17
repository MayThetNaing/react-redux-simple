/*
import React from 'react';
import ReactDOM from 'react-dom';
import Demo2 from './Demo2.jsx';

ReactDOM.render(<Demo2 />, document.getElementById('root'));
*/

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App.jsx'
import todoApp from '../reducers/reducers'

let store = createStore(todoApp)
let rootElement = document.getElementById('root')

render (
  <Provider store = {store}>
    <App />
  </Provider>,
  rootElement
)
