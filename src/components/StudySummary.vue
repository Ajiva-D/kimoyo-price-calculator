<template>
  <section>
    <div class="cost">
      <h6>TOTAL COST</h6>
      <h1>USD 0.00</h1>
    </div>

    <div class="summary">
      <h2>Study summary</h2>
      <p>Based on your study selection on Plan 01</p>

      <ul class="summary-list">
        <li>2 countries - Country 01, Country 02</li>
        <li>2 countries - Country 01, Country 02</li>
        <li>2 countries - Country 01, Country 02</li>
        <li>2 countries - Country 01, Country 02</li>
        <li>2 countries - Country 01, Country 02</li>
        <li>2 countries - Country 01, Country 02</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.cost {
  background-color: var(--dark-purple);
  padding: 4.5rem 2rem;
  color: #fff;
  h1 {
    font-size: 3rem;
    line-height: 3.625rem;
    font-weight: 700;
    margin-top: 0.5rem;
  }
}

.summary {
  background-color: var(--light-purple);
  padding: 3.5rem 2rem;

  h2 {
    font-size: 1.5rem;
    line-height: 1.8125rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  p {
    line-height: 1.5rem;
    margin-bottom: 2rem;
  }

  .summary-list {
    padding-left: 25px;
    li {
      line-height: 1.5rem;
      margin-bottom: 2rem;
    }
  }
}

@media screen and (max-width: 768px) {
  .cost {
    padding: 2.5rem 1.5rem;
  }

  .summary {
    padding: 2rem 1.5rem;
    p {
      margin-bottom: 1rem;
    }

    .summary-list {
      li {
        line-height: 1.5rem;
        margin-bottom: 1rem;
      }
    }
  }
}
</style>
