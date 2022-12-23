<template>
  <form action="" @submit.prevent="submitForm">
    <div class="form-control">
      <label for="description">Description</label>
      <input type="text" id="description" v-model="description" />
    </div>
    <base-button>ADD</base-button>
  </form>
</template>

<script>
export default {
  emits: ["save-data"],
  data() {
    return {
      description: "",
    };
  },
  methods: {
    submitForm() {
      const formData = {
        description: this.description,
      };

      this.$emit("save-data", formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  font-size: 14px;
}

input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  padding: 10px;
  margin-bottom: 20px;
}

input:focus {
  background-color: #d3e5e2;
  outline: none;
  border-color: #1f7065;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input {
  border: 1px solid red;
}
</style>
