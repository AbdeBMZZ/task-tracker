<template>
  <header>
    <h1>Task Tracker</h1>
    <Button
      :text="showForm ? 'Close' : 'Add Task'"
      :color="showForm ? 'Red' : 'Green'"
      @btn-click="$emit('toggle-form')"
      >Add</Button
    >
  </header>
</template>

<script>
import Button from "./Button";

export default {
  name: "Header",
  props: {
    showForm: Boolean,
  },
  components: {
    Button,
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}
</style>
