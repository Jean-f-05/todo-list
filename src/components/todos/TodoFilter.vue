<template>
  <base-card Colorized="true">
    <h2>Find your TODO</h2>
    <span class="filter-option">
      <input type="checkbox" name="" id="ongoing" checked @change="setFilter" />
      <label for="ongoing">ongoing</label>
      <input
        type="checkbox"
        name=""
        id="completed"
        checked
        @change="setFilter"
      />
      <label for="completed">completed</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ["change-filter"],
  data() {
    return {
      filters: {
        ongoing: true,
        completed: true,
      },
    };
  },
  methods: {
    setFilter(e) {
      const inputId = e.target.id;
      const isActive = e.target.checked;
      const updatedFilters = { ...this.filters, [inputId]: isActive };
      this.filters = updatedFilters;
      this.$emit("change-filter", updatedFilters);
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 10px;
}

.filter-option {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
}

.filter-option label {
  margin-left: -5px;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
