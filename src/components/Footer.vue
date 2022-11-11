<template>
  <footer>
    <p>Copyright &copy; 2022</p>
    <router-link to="/about">About us</router-link>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
a {
  color: #3333;
}

footer {
  margin-top: 30px;
  text-align: center;
}
</style>
