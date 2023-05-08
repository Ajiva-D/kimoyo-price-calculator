<template>
  <div class="input-group">
    <label for="">{{ label }}</label>
    <slot></slot>
    <p>{{ description }}</p>
    <slot name="error"></slot>
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.input-group {
  label {
    font-size: 0.875rem;
    line-height: 1rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-size: 0.625rem;
    line-height: 0.75rem;
    margin-top: 0.5rem;
  }
}
</style>
