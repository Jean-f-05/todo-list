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

  async loadTodos(context) {
    const response = await fetch(
      "https://63650452f711cb49d1f2b256.mockapi.io/api/v1/tasks?sortBy=createdAt&order=desc&page=1&limit=10",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const responseData = await response.json();

    if (!response.ok) {
      //
    }
    context.commit("setTodos", responseData);
  },

  async deleteTodo(context, data) {
    const response = await fetch(
      `https://63650452f711cb49d1f2b256.mockapi.io/api/v1/tasks/${data}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      //
    }
  },
};
