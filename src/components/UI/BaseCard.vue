<template>
  <div class="card" :class="{ bgColor: Colorized }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["Colorized"],
};
</script>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 0 auto 2rem;
  max-width: 40rem;
}

.bgColor {
  background-color: #227c70;
  color: #e6e2c3;
}
</style>
