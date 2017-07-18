/*
 * "addTodo" function is action creator
 * that returns action and sets an id for every created item.
 */

export const ADD_TODO = 'ADD_TODO'

let nextTodoId = 0;

export function addTodo (text) {
  return {
    type : ADD_TODO,
    id: nextTodoId++,
    text
  }
}
