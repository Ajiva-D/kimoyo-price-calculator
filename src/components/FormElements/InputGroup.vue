<template>
  <div class="input-group">
    <label for="">Number of participants</label>
    <slot></slot>
    <p>A minimum of 4 participants is needed for a study</p>
  </div>
</template>

<script>
export default {}
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
