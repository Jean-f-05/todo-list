export default {
  addTodo(context, data) {
    const todoData = {
      id: 1,
      description: data.description,
      completed: false,
      createdAt: new Date().toUTCString(),
    };
    context.commit("addTodo", todoData);
  },
};
