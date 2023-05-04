<template>
  <div class="checkbox-con">
    <input :id="label" type="checkbox" />
    <label :for="label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    selectedCountry: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.checkbox-con {
  background: #ffffff;
  border: 1px solid var(--darker-grey);
  border-radius: 4px;
  padding: 0.375rem 0.5rem;
  input {
    opacity: 0;
    position: absolute;
    z-index: -1;

    &:checked + label {
      color: var(--primary-color);

      &::before {
        background: rgba(var(--primary-color), 0.25);
        border-color: var(--primary-color);
      }

      &::after {
        transform: scale(1) rotate(-45deg);
      }
    }
  }

  label {
    $inputSize: 0.9375rem;
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: all 0.1s;

    &::before {
      border: 1px solid var(--light-grey);
      border-radius: 4px;
      content: '';
      display: inline-block;
      height: $inputSize;
      margin: -3px 10px 0 0;
      transition: all 0.1s;
      vertical-align: middle;
      width: $inputSize;
    }

    &::after {
      border-bottom: 1.5px solid var(--primary-color);
      border-left: 1.5px solid var(--primary-color);
      content: '';
      height: 0.3125rem;
      left: calc(0.25em - 1px);
      position: absolute;
      top: 35%;
      transform: scale(0) rotate(-45deg);
      transition: all 0.1s;
      width: 0.5rem;
    }
  }
}
</style>
