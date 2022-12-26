<template>
  <form action="" @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !description.isVaild }">
      <label for="description">Description</label>
      <input
        type="text"
        id="description"
        v-model="description.val"
        @blur="clearValidation('description')"
        @keydown="checkValidation('description')"
      />
    </div>
    <p v-if="!formIsValid">Form invalid! Please fix you input...</p>
    <base-button>ADD</base-button>
  </form>
</template>

<script>
export default {
  emits: ["save-data"],
  data() {
    return {
      description: { val: "", isVaild: true },
      formIsValid: true,
    };
  },
  methods: {
    checkValidation(input) {
      if (this[input].val.length >= 0) {
        this[input].isVaild = true;
      }
    },
    clearValidation(input) {
      this[input].isVaild = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.description.val.trim() === "") {
        this.description.isVaild = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();

      if (!this.formIsValid) {
        return;
      }
      const formData = {
        description: this.description.val,
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

p {
  margin-bottom: 15px;
  margin-top: -5px;
  color: #f03e3e;
}

.invalid label {
  color: #f03e3e;
}

.invalid input {
  border: 1px solid #f03e3e;
  background-color: #fcd8d8;
}
</style>
