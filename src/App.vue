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
  min-height: calc(100vh - 5.875rem);
  position: sticky;
  left: 70%;
  top: 5.875rem;
  background-color: var(--light-purple);
}
@media (max-width: 768px) {
  main {
    flex-direction: column;
    margin-top: 0rem;
  }
  .price-con {
    width: 100%;
  }
  .summary-con {
    width: 100%;
    position: relative;
    left: 0;
    top: 0;
  }
}
</style>
