export default {
  addTodo(state, payload) {
    state.todos.push(payload);
  },
  setTodos(state, payload) {
    state.todos = payload;
  },
  deleteTodo(state, payload) {
    const i = state.todos.map((todo) => todo.id).indexOf(payload);
    state.todos.splice(i, 1);
  },
};
