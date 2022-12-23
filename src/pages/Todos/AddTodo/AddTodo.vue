<template>
  <section>
    <base-card>
      <h2>Add Todo</h2>
      <todo-form></todo-form>
    </base-card>
  </section>
</template>

<script>
import TodoForm from "../../../components/todos/TodoForm.vue";

export default {
  components: { TodoForm },
};
</script>

<style scoped>
h2 {
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
}
</style>
