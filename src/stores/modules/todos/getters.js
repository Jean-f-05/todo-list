export default {
  todos(state) {
    return state.todos;
  },
  hasTodos(state) {
    return state.todos && state.todos.length > 0;
  },
};
