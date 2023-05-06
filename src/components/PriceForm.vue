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
            v-model="formData.selectedPlan"
          />
        </div>
      </div>

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
        </InputGroup>

        <button>Reset pricing selection</button>
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
import { onUpdated, ref } from 'vue'
import {
  NeedTranscriptsDropdown,
  ProjectGuidesDropdown,
  StudyModerationDropdown,
  StudyReportDropdown,
  StudySessionDropdown,
  StudyStructureDropdown
} from '@/constants'
import type { DropdownType } from '@/types'

type formDataType = {
  selectedPlan: string
  selectedCountries: string[]
  participant: string
  additionalParticipants: string
  studyDuration: string
  studyStructure: string
  studyModeration: string
  projectGuides: string
  needTranscripts: string
  studyReport: string
}
const formData = ref<formDataType>({
  selectedPlan: '',
  selectedCountries: [],
  participant: '',
  additionalParticipants: '',
  studyDuration: '',
  studyStructure: '',
  studyModeration: '',
  projectGuides: '',
  needTranscripts: '',
  studyReport: ''
})

type InputType = {
  label: string
  placeholder: string
  description: string
  modelKey: string
  dropdown?: DropdownType[]
}
const textInputs: InputType[] = [
  {
    label: 'Number of participants',
    placeholder: '00',
    description: 'A minimum of 4 participants is needed for a study',
    modelKey: 'participant'
  },
  {
    label: 'Number of additional participants',
    placeholder: '00',
    description: 'This must be at least 20% of total participants',
    modelKey: 'additionalParticipants'
  }
]

const selectInputs: InputType[] = [
  {
    label: 'Duration of each study session',
    placeholder: '— Select study session duration',
    description: 'How long will each study session last?',
    modelKey: 'studyDuration',
    dropdown: StudySessionDropdown
  },
  {
    label: 'Study structure',
    placeholder: '— Select study structure',
    description: 'Will this be an online study or physical study?',
    modelKey: 'studyStructure',
    dropdown: StudyStructureDropdown
  },
  {
    label: 'Study moderation',
    placeholder: '— Select study moderation',
    description: 'Do you need help from Kimoyo moderating this study?',
    modelKey: 'studyModeration',
    dropdown: StudyModerationDropdown
  },
  {
    label: 'Project management & discussion guide prep',
    placeholder: '— Select',
    description: 'Do you need help from Kimoyo with a discussion prep?',
    modelKey: 'projectGuides',
    dropdown: ProjectGuidesDropdown
  },
  {
    label: 'Need transcripts from each session?',
    placeholder: '— Select',
    description: 'Do you need help from Kimoyo transcribing each session?',
    modelKey: 'needTranscripts',
    dropdown: NeedTranscriptsDropdown
  },
  {
    label: 'Study report & analysis',
    placeholder: '— Select study report & analysis',
    description: 'Will you need help analyzing this study findings and insights?',
    modelKey: 'studyReport',
    dropdown: StudyReportDropdown
  }
]

onUpdated(() => {
  console.log('updating')

  console.log(formData.value)
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
