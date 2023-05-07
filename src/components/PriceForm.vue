<template>
  <section class="price-form">
    <div class="title">
      <h1>Pricing calculator</h1>
      <p>Calculate how much it will cost to conduct a Kimoyo Research Study.</p>
    </div>

    <form @submit.prevent="resetForm">
      <div class="service-plan">
        <h6>Select a Kimoyo service plan</h6>
        <div class="plans">
          <RadioButton
            v-for="i in 3"
            :key="i"
            :label="`Plan 0${i}`"
            name="plans_radio"
            :value="`plan-${i}`"
            v-model="formData.selectedPlan"
          />
        </div>
        <BadgeAlert
          badge="📣 A description for a standard Kimoyo service plan and what it entails."
          v-if="formData.selectedPlan"
        />
        <ErrorMessage :validator="v$.selectedPlan" errorLabel="Service plan" />
      </div>

      <div>
        <div class="countries">
          <h6>Countries to recruit participants from</h6>
          <div class="checkbox-con">
            <CheckBox
              :label="`Country 0${i}`"
              :value="`Country_${i}`"
              v-model="formData.selectedCountries"
              v-for="i in 5"
              :key="i"
            />
          </div>
        </div>
        <ErrorMessage :validator="v$.selectedCountries" errorLabel="Country" />
      </div>

      <div class="input-grid">
        <InputGroup
          v-for="{ label, placeholder, description, modelKey } in textInputs"
          :label="label"
          :description="description"
          :key="modelKey"
        >
          <input
            type="text"
            :name="modelKey"
            :id="modelKey"
            :placeholder="placeholder"
            v-model="formData[modelKey]"
            class="form-input"
          />
          <template #error>
            <ErrorMessage :validator="v$[modelKey]" :errorLabel="label" />
          </template>
        </InputGroup>

        <InputGroup
          v-for="{ label, placeholder, description, modelKey, dropdown } in selectInputs"
          :label="label"
          :description="description"
          :key="modelKey"
        >
          <CustomSelect
            v-if="dropdown"
            :placeholder="placeholder"
            :dropdown="dropdown"
            v-model="formData[modelKey]"
          />
          <template #error>
            <ErrorMessage :validator="v$[modelKey]" :errorLabel="label" />
          </template>
        </InputGroup>

        <button type="submit">Reset pricing selection</button>
      </div>

      <div class="input-grid"></div>
    </form>
  </section>
</template>

<script setup lang="ts">
import RadioButton from './FormElements/RadioButton.vue'
import CheckBox from './FormElements/CheckBox.vue'
import InputGroup from './FormElements/InputGroup.vue'
import CustomSelect from './FormElements/CustomSelect.vue'
import { computed, onUpdated, ref } from 'vue'
import { textInputs, selectInputs } from '@/constants'
import type { formDataType } from '@/types'
import { useVuelidate } from '@vuelidate/core'
import { required, numeric, minValue, helpers } from '@vuelidate/validators'
import ErrorMessage from './ErrorMessage.vue'
import BadgeAlert from './FormElements/BadgeAlert.vue'

const formData = ref<formDataType>({
  selectedPlan: '',
  selectedCountries: [],
  participant: '',
  additionalParticipants: '',
  studyDuration: '',
  studyStructure: null,
  studyModeration: null,
  projectGuides: null,
  needTranscripts: null,
  studyReport: null
})

const defaultAdditionalParticipants = computed<number>(() => {
  return formData.value.participant ? (parseInt(formData.value.participant) * 20) / 100 : 0
})

const minValue20Percent = (min: number) => {
  return helpers.withMessage(`must be at least ${min} of the total participants`, minValue(min))
}
const rules = computed(() => ({
  selectedPlan: {
    required,
    $autoDirty: true
  },
  selectedCountries: {
    required,
    $autoDirty: true
  },
  participant: {
    required,
    $autoDirty: true,
    numeric,
    minValue: minValue(4)
  },
  additionalParticipants: {
    required,
    $autoDirty: true,
    numeric,
    minValue: minValue20Percent(defaultAdditionalParticipants.value)
  },
  studyDuration: {
    required,
    $autoDirty: true
  },
  studyStructure: {
    required,
    $autoDirty: true
  },
  studyModeration: {
    required,
    $autoDirty: true
  },
  projectGuides: {
    required,
    $autoDirty: true
  },
  needTranscripts: {
    required,
    $autoDirty: true
  },
  studyReport: {
    required,
    $autoDirty: true
  }
}))

const v$ = useVuelidate(rules, formData.value)

const resetForm = async () => {
  const isFormCorrect = await v$.value.$validate()
  if (!isFormCorrect) return
  formData.value = {
    selectedPlan: '',
    selectedCountries: [],
    participant: '',
    additionalParticipants: '',
    studyDuration: '',
    studyStructure: null,
    studyModeration: null,
    projectGuides: null,
    needTranscripts: null,
    studyReport: null
  }
  v$.value.$reset()
}

onUpdated(() => {
  console.log('updating')
  const { selectedPlan } = formData.value
  if (selectedPlan == 'plan-2') {
    formData.value.studyStructure = true
  } else if (selectedPlan == 'plan-3') {
    formData.value.studyModeration = true
    formData.value.projectGuides = true
    formData.value.needTranscripts = true
    formData.value.studyReport = true
  }
})
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
    cursor: pointer;
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
