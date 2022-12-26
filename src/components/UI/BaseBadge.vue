<template>
  <span class="badge" :class="type ? 'completed' : 'ongoing'">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ["type"],
  computed: {
    text() {
      return this.type ? "COMPLETED" : "ONGOING";
    },
  },
};
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 1rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.completed {
  background-color: #ced4da;
  color: #e6e2c3;
}

.ongoing {
  background-color: #227c70;
  color: #e6e2c3;
}
</style>
