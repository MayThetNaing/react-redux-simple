/*
 * 'App' component is the root component of the app
 * connect function which is used for connecting our root component App to the store
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/actions'

import AddToDo from '../components/AddToDo.jsx'
import TodoList from '../components/TodoList.jsx'

class App extends Component {
  render() {
    const { dispatch, visibleTodos } = this.props
    return (
      <div>
        <AddToDo
          onAddClick = { 
            text => dispatch(addTodo(text)) // dispatch 'addTodo' function
          }
        />
        <TodoList todos = { visibleTodos } />
      </div>
    )
  }
}

/*
 * select function takes state from the store and
 * returns the props (visibleTodos) that we can use in our components.
 */
function select(state) {
  return {
    visibleTodos: state.todos
  }
}

// 'connect' function takes select function as an argument.
export default connect(select)(App)
