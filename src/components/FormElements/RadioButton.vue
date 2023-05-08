<template>
  <div :class="`radio-button-con ${isSelected ? 'activePlan' : ''}`">
    <input
      type="radio"
      :id="label"
      :name="name"
      :value="value"
      v-model="model"
      data-test="custom-radio"
    />
    <label :for="label">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  modelValue: { type: String }
})

const emit = defineEmits(['update:modelValue'])
const model = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

const isSelected = computed(() => model.value === props.value)
</script>

<style lang="scss" scoped>
.radio-button-con {
  /* variables */
  $radio-size: 1.25rem;
  $radio-spacing: calc($radio-size + 0.625rem);

  padding: 1rem;
  font-size: 0.875rem;
  border: 1px solid var(--light-grey);
  border-radius: 0.25rem;
  position: relative;

  &.activePlan {
    border-color: var(--primary-color);
  }

  input[type='radio'] {
    display: none;
    &:checked + label::before {
      border-color: var(--primary-color);
    }
    &:checked + label::after {
      transform: translateY(-50%) scale(0.55);
    }
  }

  label {
    cursor: pointer;
    position: relative;
    margin-left: $radio-spacing;
    &::before {
      content: '';
      position: absolute;
      width: $radio-size;
      height: $radio-size;
      background-color: transparent;
      border: 1px solid var(--light-grey);
      border-radius: 50%;
      top: 50%;
      left: -$radio-spacing;
      transform: translateY(-50%);
      transition: border-color 400ms ease;
    }
    &::after {
      content: '';
      position: absolute;
      width: $radio-size;
      height: $radio-size;
      background-color: var(--primary-color);
      border: 1px solid var(--primary-color);
      border-radius: 50%;
      top: 50%;
      left: -$radio-spacing;
      transform: translateY(-50%) scale(0);
      transition: transform 400ms ease;
    }
  }
}

@media screen and (max-width: 767px) {
  .radio-button-con {
    padding: 0.5rem;
  }
}
</style>
