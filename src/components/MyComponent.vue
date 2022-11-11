<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data() {
    return {
      title: "Asura",
    };
  },
};
</script>

<style>
h1 {
  color: blue;
}
</style>
