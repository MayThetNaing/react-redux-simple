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
          onAddClick = { text => dispatch(addTodo(text)) }
        />
        <TodoList todos = { visibleTodos } />
      </div>
    )
  }
}

function select(state) {
  return {
    visibleTodos: state.todos
  }
}

export default connect(select)(App)
