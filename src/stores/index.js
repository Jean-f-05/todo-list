import { createStore } from "vuex";

import todosModule from "./modules/todos/index.js";

const store = createStore({
  modules: { todos: todosModule },
});

export default store;
