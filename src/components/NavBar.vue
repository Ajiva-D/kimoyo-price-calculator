<template>
  <nav>
    <img src="../assets/logo.svg" alt="Logo" />
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
nav {
  padding: 2rem 7.5rem;
  background-color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}
@media screen and (max-width: 768px) {
  nav {
    position: static;
  }
}
@media (min-width: 769px) and (max-width: 1439px) {
  nav {
    padding: 2rem 3.5rem;
  }
}
</style>
