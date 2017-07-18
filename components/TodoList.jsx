import React, { Component, PropTypes } from 'react'
import Todo from './Todo.jsx'

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(
          todo => <Todo
            key = {todo.id}
            {...todo} //... as a "spread" operator to pass the whole todo object.
          />
        )}
      </ul>
    )
  }
}
