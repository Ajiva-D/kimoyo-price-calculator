<template>
  <section>
    <div class="title">
      <h1>Pricing calculator</h1>
      <p>Calculate how much it will cost to conduct a Kimoyo Research Study.</p>
    </div>

    <div class="service-plan">
      <h6>Select a Kimoyo service plan</h6>
      <div class="plans">
        <div class="plan" v-for="i in 3" :key="i">Plan 0{{ i }}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
section {
  padding: 2.5rem 7.5rem;
  background-color: #fafafa;
  .title {
    margin-bottom: 3rem;
    h1 {
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 1.8125rem;
      margin-bottom: 10px;
    }
    p {
      font-size: 0.875rem;
      line-height: 1rem;
    }
  }

  .service-plan {
    h6 {
      font-weight: 600;
      margin-bottom: 1rem;
    }
    .plans {
      display: flex;
      gap: 1rem;

      .plan {
        padding: 1rem;
        font-size: 0.875rem;
        border: 1px solid #bdbdbd;
        border-radius: 4px;
      }
    }
  }
}
</style>
