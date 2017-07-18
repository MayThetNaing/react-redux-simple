/*
 * reducer is a function that takes two parameters (state and action) to calculate and return updated state
 */

import { combineReducers } from 'redux' // combineReducers helper function where we can add any new reducers
import { ADD_TODO } from '../actions/actions'

function todo(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
      }
      break;
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state, //... as a "spread" operator to pass the whole state object.
        todo(undefined, action),
      ]
      break;
    default:
      return state

  }
}

const todoApp = combineReducers ({
  todos
})

export default todoApp
