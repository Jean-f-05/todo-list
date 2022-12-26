export default {
  addTodo(state, payload) {
    state.todos.push(payload);
  },
  setTodos(state, payload) {
    state.todos = payload;
  },
};
