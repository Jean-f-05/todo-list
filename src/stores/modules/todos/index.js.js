import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
  namespaced: true,
  state() {
    return {
      todos: [
        {
          createdAt: "2022-12-18T16:31:22.352Z",
          description: "Walk the dog",
          completed: true,
          id: "10",
        },
        {
          createdAt: "2022-12-18T14:51:49.169Z",
          description: "Make dinner",
          completed: true,
          id: "8",
        },
        {
          createdAt: "2022-12-18T14:37:24.451Z",
          description: "Feed the cat",
          completed: true,
          id: "9",
        },
        {
          createdAt: "2022-12-18T09:32:35.006Z",
          description: "Do the dishess",
          completed: false,
          id: "6",
        },
        {
          createdAt: "2022-12-18T03:58:20.482Z",
          description: "Take out trash",
          completed: false,
          id: "7",
        },
        {
          createdAt: "2022-12-17T21:06:00.565Z",
          description: "1 hour of learning",
          completed: true,
          id: "11",
        },
      ],
    };
  },
  mutations,
  getters,
  actions,
};
