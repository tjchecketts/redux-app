const todos = ( state = [], action ) => {
  switch(action.type) {
    case 'TODOS':
      return action.todos;
    case 'ADD_TODO':
      //{ type: 'ADD_TODO', todo: { name: 'hi', id: 1 }
      return [action.todo, ...state];
    case 'TOGGLE_TODO':
      //{ type: 'TOGGLE_TODO', id: 7 }
      return state.map( todo => {
        if (todo.id === action.id)
          return { ...todo, complete: !todo.complete }
        return todo
      })
    default:
      return state;
  }
}

export default todos;