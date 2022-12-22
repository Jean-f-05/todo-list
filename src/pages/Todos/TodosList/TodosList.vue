<template>
  <section>FILTER</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/add">Add todo</router-link>
    </div>
    <ul v-if="hasTodos">
      <li v-for="todo in filteredTodos" :key="todo.id">
        {{ todo.description }}
      </li>
    </ul>
    <h3 v-else>NO TODOS</h3>
  </section>
</template>

<script>
export default {
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
