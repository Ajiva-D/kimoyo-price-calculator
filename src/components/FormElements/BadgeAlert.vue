<template>
  <div class="badge">
    {{ badge }}
  </div>
</template>

<script setup lang="ts">
defineProps({
  badge: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.badge {
  background-color: var(--green);
  padding: 0.625rem 0.5rem;
  font-size: 0.625rem;
  line-height: 0.75rem;
  width: fit-content;
  margin-top: 1rem;
  border-radius: 4px;
}
</style>
