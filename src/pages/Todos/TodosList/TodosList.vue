<template>
  <section>
    <base-card>
      <div><todo-filter @change-filter="setFilters"></todo-filter></div>
      <div class="controls">
        <base-button mode="outline" @click="loadTodos">Refresh</base-button>
        <base-button link to="/add">ADD TODO</base-button>
      </div>
      <div v-if="isLoading">
        <base-loader></base-loader>
      </div>
      <ul v-else-if="hasTodos">
        <todo-item
          v-for="todo in filteredTodos"
          :key="todo.id"
          :id="todo.id"
          :description="todo.description"
          :created-at="todo.createdAt"
          :completed="todo.completed"
        ></todo-item>
      </ul>
      <h3 v-else>NO TODOS</h3>
    </base-card>
  </section>
</template>

<script>
import TodoItem from "../../../components/todos/TodoItem.vue";
import TodoFilter from "../../../components/todos/TodoFilter.vue";

export default {
  components: { TodoItem, TodoFilter },
  data() {
    return {
      isLoading: false,
      activeFilters: {
        completed: true,
        ongoing: true,
      },
    };
  },
  computed: {
    filteredTodos() {
      const todos = this.$store.getters["todos/todos"];
      return todos.filter((todo) => {
        if (this.activeFilters.completed && todo["completed"]) {
          return true;
        }
        if (this.activeFilters.ongoing && !todo["completed"]) {
          return true;
        }
        return false;
      });
    },
    hasTodos() {
      return !this.isLoading && this.$store.getters["todos/hasTodos"];
    },
  },
  created() {
    this.loadTodos();
  },
  methods: {
    async loadTodos() {
      this.isLoading = true;
      await this.$store.dispatch("todos/loadTodos");
      this.isLoading = false;
    },
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
