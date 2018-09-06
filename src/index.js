import React from 'react';
import ReactDOM from 'react-dom';
import NewTodo from './addTodo';
import { Provider } from 'react-redux'
const App = (
  <Provider>
    <NewTodo/>
  </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
