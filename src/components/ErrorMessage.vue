<template>
  <FadeTransition>
    <div v-if="validator.$error">
      <p class="error" v-for="error of validator.$errors" :key="error.$uid">
        *{{ errorLabel }} {{ error.$message }}*
      </p>
    </div>
  </FadeTransition>
</template>

<script setup lang="ts">
import type { ErrorObject } from '@vuelidate/core'
import FadeTransition from './FadeTransition.vue'

type PropsType = {
  validator: { $error: boolean; $errors: ErrorObject[] }
  errorLabel: string
}

defineProps<PropsType>()
</script>

<style scoped>
.error {
  color: #dc2626;
  margin-top: 0.5rem;
}
</style>
