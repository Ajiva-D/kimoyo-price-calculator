<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import PriceForm from './components/PriceForm.vue'
import StudySummary from './components/StudySummary.vue'
</script>

<template>
  <NavBar />

  <main>
    <section class="price-con">
      <PriceForm />
    </section>

    <section class="summary-con">
      <StudySummary />
    </section>
  </main>
</template>

<style scoped>
main {
  display: flex;
  position: relative;
  margin-top: 5rem;
}
.price-con {
  width: 70%;
}
.summary-con {
  width: 30%;
  height: 100%;
  position: sticky;
  left: 70%;
  top: 94px;
  background-color: var(--light-purple);
}
</style>
