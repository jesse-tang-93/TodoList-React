import React from 'react';
import ReactDOM from 'react-dom';
import NewTodo from './addTodo';
import { Provider } from 'react-redux'
import store from './newstore'
const App = (
  // provider 连接了store，将store提供给内部所有的组件，则它内部所有的组件都可以获取store
  //  provider 提供器    对应组件中connect的接收
  <Provider store={store}>
    <NewTodo/>
  </Provider>
)
console.log(store)
ReactDOM.render(App, document.getElementById('root'));
