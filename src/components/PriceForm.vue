<template>
  <section class="price-form">
    <div class="title">
      <h1>Pricing calculator</h1>
      <p>Calculate how much it will cost to conduct a Kimoyo Research Study.</p>
    </div>

    <form>
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

      <div class="countries">
        <h6>Countries to recruit participants from</h6>
        <div class="checkbox-con">
          <CheckBox :label="`Country 0${i}`" :value="`Country_${i}`" v-for="i in 5" :key="i" />
        </div>
      </div>

      <div class="input-grid">
        <InputGroup>
          <input type="text" name="" id="" class="form-input" />
        </InputGroup>

        <InputGroup>
          <input type="text" name="" id="" class="form-input" />
        </InputGroup>

        <InputGroup v-for="i in 6" :key="i">
          <CustomSelect />
        </InputGroup>

        <button>Reset pricing selection</button>
      </div>
    </form>
  </section>
</template>

<script>
import RadioButton from './FormElements/RadioButton.vue'
import CheckBox from './FormElements/CheckBox.vue'
import InputGroup from './FormElements/InputGroup.vue'
import CustomSelect from './FormElements/CustomSelect.vue'
export default {
  components: {
    RadioButton,
    CheckBox,
    InputGroup,
    CustomSelect
  },
  data: () => ({
    selectedPlan: ''
  }),
  updated() {
    console.log(this.selectedPlan)
  }
}
</script>

<style lang="scss">
.price-form {
  padding: 2.5rem 7.5rem 5.5rem;
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

  .countries {
    background: #ffffff;
    border: 1px solid var(--darker-grey);
    border-radius: 4px;
    padding: 1.5rem;
    margin-top: 3rem;
    h6 {
      margin-bottom: 1rem;
    }
    .checkbox-con {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
  }

  .input-grid {
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
    .form-input {
      background-color: #fff;
      border: 1px solid var(--darker-grey);
      border-radius: 0.25rem;
      font-size: 0.875rem;
      padding: 1rem;
      width: 100%;
    }
  }

  button {
    background-color: var(--light-black);
    font-weight: 700;
    line-height: 1.1875rem;
    padding: 1.125rem 0;
    border: none;
    border-radius: 0.25rem;
    margin-top: 0.5rem;
  }
}

@media screen and (max-width: 768px) {
  .price-form {
    padding: 1.5rem 1.5rem 3.5rem;
    .input-grid {
      grid-template-columns: 1fr;
    }
    .countries {
      border: none;
      padding: 0rem;
    }
  }
}

@media (min-width: 769px) and (max-width: 1439px) {
  .price-form {
    padding: 2.5rem 3.5rem 3.5rem;
  }
}
</style>
