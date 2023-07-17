<template>
  <div class="radio">
    <input
      :id="name"
      class="radio__field"
      type="radio"
      :checked="isChecked"
      :value="value"
      :disabled="disabled"
      @change="
        emits('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
    <label class="radio__label" :for="name">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface IRadioProps {
  modelValue: string;
  label: string;
  value?: string;
  name: string;
  disabled?: boolean;
}
const emits = defineEmits(["update:modelValue"]);

const { value, modelValue } = defineProps<IRadioProps>();

const isChecked = computed(() => modelValue === value);
</script>

<style scoped lang="scss">
@import "@assets/styles/components/Radio.scss";
</style>
