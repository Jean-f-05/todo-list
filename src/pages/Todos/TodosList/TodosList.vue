<template>
  <section>FILTER</section>
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

export default {
  components: { TodoItem },
  computed: {
    filteredTodos() {
      return this.$store.getters["todos/todos"];
    },
    hasTodos() {
      return this.$store.getters["todos/hasTodos"];
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
