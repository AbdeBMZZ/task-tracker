<template>
  <header>
    <h1>Task Tracker</h1>
    <Button text="Abdellah" color="green">Add</Button>
  </header>
</template>

<script>
import Button from "./Button";

export default {
  name: "Header",
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
