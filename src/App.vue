<template>
  <TheHeader></TheHeader>

  <RouterView />
</template>

<script>
import "./styles/global.css";
import TheHeader from "./components/TheHeader/TheHeader.vue";

export default { components: { TheHeader } };
</script>
