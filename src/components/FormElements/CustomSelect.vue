<template>
  <div class="select-group">
    <div class="form-input select" @click="toggleDropdown">
      <p>{{ displayValue }}</p>
      <ArrowDown />
    </div>
    <Transition name="slide-up">
      <ul class="dropdown" v-if="showDropdown">
        <li v-for="{ id, value, label } in props.dropdown" :key="id" @click="selectItem(value)">
          {{ label }}
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import ArrowDown from '../Icons/ArrowDown.vue'
import type { DropdownType } from '@/types'

type PropsType = {
  placeholder: string
  dropdown: DropdownType[]
  modelValue: string
}

const props = defineProps<PropsType>()

const showDropdown = ref<boolean>(false)

const displayValue = computed<string>(() => {
  const selectedItem = props.dropdown.find((item) => item.value === props.modelValue)
  return selectedItem?.label || props.placeholder
})

const emit = defineEmits(['select', 'update:modelValue'])

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const selectItem = (item: string | boolean) => {
  emit('update:modelValue', item)
  showDropdown.value = false
}
</script>

<style lang="scss" scoped>
.select-group {
  position: relative;
  cursor: pointer;

  .slide-up-enter-active {
    animation: slide-up 0.5s;
  }
  .slide-up-leave-active {
    animation: slide-up 0.5s reverse;
  }

  @keyframes slide-up {
    0% {
      opacity: 0;
    }
    10% {
      transform: scaleY(0) translate3d(0, 0, 0);
      transform-origin: top;
    }
    90% {
      transform: scaleY(1) translate3d(0, 0, 0);
      transform-origin: top;
    }
    100% {
      opacity: 1;
    }
  }
}
.select {
  color: var(--darker-grey);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dropdown {
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.06);
  border-radius: 0.25rem;
  padding: 0;
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0px;
  width: 100%;
  z-index: 3;
  li {
    padding: 1rem;
    list-style: none;
    font-size: 0.875rem;
    border-bottom: 1px solid var(--light-black);
    transition: all 0.5s ease-in-out;
    &:last-child {
      border-bottom: none;
    }
    &:hover {
      background-color: var(--primary-color);
      color: #fff;
    }
  }
}
</style>
