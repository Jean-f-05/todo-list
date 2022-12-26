<template>
  <li>
    <div class="item-head">
      <base-badge :type="completed"></base-badge>
      <div>
        <base-button
          v-if="!completed"
          icon
          mode="icon-e"
          name="ri-edit-box-line"
          :to="todoEditLink"
          color="#1f7065"
        ></base-button>
        <base-button
          icon
          mode="icon-d"
          name="bi-trash"
          :to="todoDeleteLink"
          color="#fa5252"
        ></base-button>
      </div>
    </div>
    <h3>{{ description }}</h3>
    <div class="actions">
      <base-button
        v-if="!completed"
        icon
        mode="icon-e"
        name="io-checkmark-circle-sharp"
        :to="todoDeleteLink"
        color="#1f7065"
      ></base-button>
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "description", "createdAt", "completed"],
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
  font-size: 1.6rem;
  margin: 0.5rem 0;
}

span {
  margin-bottom: 5px;
}
div {
  margin: 0.5rem 0;
}

.item-head {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
