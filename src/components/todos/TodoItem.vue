<template>
  <li>
    <h3>{{ "description" }}</h3>
    <base-badge :type="completed" title="completed"></base-badge>
    <div class="action">
      <base-button link mode="outline" :to="todoEditLink">EDIT</base-button>
      <base-button link mode="delete" :to="todoDeleteLink">DELETE</base-button>
    </div>
  </li>
</template>

<script>
export default {
  propos: ["id", "description", "createdAt", "completed"],
  computed: {
    todoEditLink() {
      return this.$route.path + "/" + this.id + "/edit";
    },
    todoDeleteLink() {
      return this.$route.path + "/" + this.id + "/delete";
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
