<template>
  <button v-if="!link && !icon" :class="mode"><slot></slot></button>

  <RouterLink v-else-if="icon" :to="to" :color="color" :class="mode">
    <v-icon :name="name" :fill="color" scale="1.3"
  /></RouterLink>

  <RouterLink v-else :to="to" :class="mode"><slot></slot></RouterLink>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      deafult: false,
    },
    to: {
      type: String,
      required: false,
      deafult: null,
    },
    name: {
      type: String,
      required: false,
      deafult: "/",
    },
    icon: {
      type: Boolean,
      required: false,
      deafult: false,
    },
    color: {
      type: String,
      required: false,
      default: "transparent",
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #1f7065;
  border: 1px solid #1f7065;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #1c655b;
  border-color: #1c655b;
}

.flat {
  background-color: transparent;
  color: #1f7065;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #1f7065;
  color: #1f7065;
}

.icon-e {
  background-color: transparent;
  border-color: transparent;
  color: #1f7065;
  padding: 0;
}
.icon-e:hover {
  background-color: transparent;
  border-color: transparent;
}

.icon-d {
  background-color: transparent;
  border-color: transparent;
  padding: 0;
}
.icon-d:hover {
  background-color: transparent;
  border-color: transparent;
}

.delete {
  background-color: #fa5252;
  border-color: #fa5252;
  color: #fff;
}

.delete:hover {
  background-color: #f03e3e;
  border-color: #f03e3e;
  color: #fff;
}
.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #d3e5e2;
}
</style>
