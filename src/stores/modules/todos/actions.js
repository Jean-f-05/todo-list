export default {
  async addTodo(context, data) {
    const todoData = {
      description: data.description,
      completed: false,
    };

    const response = await fetch(
      "https://63650452f711cb49d1f2b256.mockapi.io/api/v1/tasks",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todoData),
      }
    );

    if (!response.ok) {
      //
    }

    context.commit("addTodo", todoData);
  },
};
