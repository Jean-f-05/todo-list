<template>
  <section>
    <base-card>
      <h2>Add Todo</h2>
      <todo-form @save-data="saveData"></todo-form>
    </base-card>
  </section>
</template>

<script>
import TodoForm from "../../../components/todos/TodoForm.vue";

export default {
  components: { TodoForm },
  methods: {
    saveData(data) {
      this.$store.dispatch("todos/addTodo", data);
      this.$router.replace("/todos");
    },
  },
};
</script>

<style scoped>
h2 {
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
}
</style>
