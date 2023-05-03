<template>
  <section>
    <div class="title">
      <h1>Pricing calculator</h1>
      <p>Calculate how much it will cost to conduct a Kimoyo Research Study.</p>
    </div>

    <div class="service-plan">
      <h6>Select a Kimoyo service plan</h6>
      <div class="plans">
        <RadioButton
          v-for="i in 3"
          :key="i"
          :label="`Plan 0${i}`"
          name="plans_radio"
          :value="`plan-${i}`"
          :selectedPlan="selectedPlan"
          @input="selectedPlan = $event"
        />
      </div>
    </div>
  </section>
</template>

<script>
import RadioButton from './FormElements/RadioButton.vue'
export default {
  components: {
    RadioButton
  },
  data: () => ({
    selectedPlan: ''
  }),
  updated() {
    console.log(this.selectedPlan)
  }
}
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
    }
  }
}
</style>
