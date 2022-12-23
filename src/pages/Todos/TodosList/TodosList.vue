<template>
  <section><todo-filter @change-filter="setFilters"></todo-filter></section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/add">Add todo</base-button>
      </div>
      <ul v-if="hasTodos">
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
      return this.$store.getters["todos/hasTodos"];
    },
  },
  methods: {
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
