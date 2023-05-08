<template>
  <section>
    <div class="cost">
      <h6>TOTAL COST</h6>
      <h1>USD {{ totalCost > 0 ? totalCost : '0.00' }}</h1>
    </div>

    <div class="summary">
      <h2>Study summary</h2>
      <p v-if="formData">Based on your study selection on {{ formData.selectedPlan }}</p>
      <p v-else>Your study summary will be displayed here based on your selection.</p>

      <ul class="summary-list">
        <li v-if="countriesLength">
          {{ countriesLength }} {{ countriesLength > 1 ? 'countries' : 'country' }} -
          <span v-for="country in formData?.selectedCountries" :key="country">
            {{ country }},
          </span>
        </li>
        <li v-if="formData?.participant">
          {{ formData.participant }} {{ appendParticipant(formData.participant) }}
          <span v-if="formData?.additionalParticipants"
            >+ {{ formData.additionalParticipants }} additional
            {{ appendParticipant(formData.additionalParticipants) }}</span
          >
        </li>
        <li v-if="formData?.studyDuration">{{ formData.studyDuration }}</li>
        <li v-if="formData?.studyStructure">
          {{ formData.studyStructure }}
        </li>
        <li v-if="formData?.studyModeration != null">
          {{ formData.studyModeration ? 'Kimoyo moderates' : 'I will moderate' }}
        </li>
        <li v-if="formData?.projectGuides != null">
          Project management & discussion guide preparation
          {{ formData.projectGuides ? 'needed' : 'not needed' }}
        </li>
        <li v-if="formData?.needTranscripts != null">
          {{ formData.needTranscripts ? 'Transcripts needed ' : 'No transcripts needed' }}
        </li>
        <li v-if="formData?.studyReport != null">
          {{
            formData.studyReport
              ? 'Need study report and analysis '
              : "Don't Need study report and analysis"
          }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { formDataType } from '@/types'
import { computed, toRefs } from 'vue'

type PropsType = {
  formData: formDataType | null
}
const props = defineProps<PropsType>()
const { formData } = toRefs(props)

const countriesLength = computed(() => {
  return formData?.value ? formData.value?.selectedCountries.length : 0
})

const appendParticipant = (noOfParticipant: string) => {
  return `particpant${parseInt(noOfParticipant) > 1 ? 's' : ''}`
}

// assign the value of the participant based on the session and multiply value if plan is 02
const returnParticipantValue = (session: string) => {
  const multiplier = formData.value?.selectedPlan === 'Plan 02' ? 2 : 1
  switch (session) {
    case '30 minutes study session':
      return 0.5 * multiplier
    case '60 minutes study session':
      return 1 * multiplier
    case '90 minutes study session':
      return 1.5 * multiplier

    default:
      return 0
  }
}

const totalCost = computed(() => {
  // get the plan multiplier value
  const planMultiplier =
    formData.value?.selectedPlan === 'Plan 02'
      ? 2
      : formData.value?.selectedPlan === 'Plan 02'
      ? 3
      : 1

  const countryTotal = countriesLength.value * planMultiplier

  let participantTotal: number = 0
  if (
    formData.value?.participant &&
    formData.value?.additionalParticipants &&
    formData.value?.studyDuration
  ) {
    participantTotal =
      (parseInt(formData.value.participant) + parseInt(formData.value.additionalParticipants)) *
      returnParticipantValue(formData.value?.studyDuration)
  }

  console.log('participantTotal', participantTotal, formData.value?.studyDuration)

  let currentTotalCost = countryTotal + participantTotal

  if (formData.value?.studyStructure === 'face-to-face study') {
    currentTotalCost = currentTotalCost + 1 * planMultiplier
  }

  if (formData.value?.studyModeration) {
    currentTotalCost = currentTotalCost + 2 * planMultiplier
  }

  if (formData.value?.projectGuides) {
    currentTotalCost = currentTotalCost + 1 * planMultiplier
  }

  if (formData.value?.needTranscripts) {
    currentTotalCost = currentTotalCost + 2 * planMultiplier
  }

  if (formData.value?.studyReport) {
    currentTotalCost = currentTotalCost + 5 * planMultiplier
  }

  return currentTotalCost
})
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
