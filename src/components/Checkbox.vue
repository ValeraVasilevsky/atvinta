<template>
  <div class="checkbox">
    <input
      :id="name"
      class="checkbox__field"
      type="checkbox"
      v-model="model"
      :checked="model"
      :value="value"
      :disabled="disabled"
    />
    <label :for="name" class="checkbox__label text" :class="fieldDisabled">
      {{ label }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface ICheckboxProps {
  modelValue: boolean;
  label: string;
  value?: string;
  name: string;
  disabled?: boolean;
}

const { value, modelValue, label, disabled } = withDefaults(
  defineProps<ICheckboxProps>(),
  {
    disabled: false,
  }
);
const emits = defineEmits(["update:modelValue"]);

const model = computed({
  get() {
    return modelValue;
  },
  set(value: boolean) {
    emits("update:modelValue", value);
  },
});
const fieldDisabled = computed(() => disabled && "checkbox__label_disabled");
</script>

<style scoped lang="scss">
@import "@assets/styles/components/Checkbox.scss";
</style>
