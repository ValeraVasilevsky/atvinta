<template>
  <button
    class="button"
    :class="buttonClasses"
    type="button"
    @click="emits('click')"
    :disabled="disabled"
  >
    <p class="button__text">{{ text }}</p>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

type TButtonType = "fill" | "stroke";
type TButtonColor = "orange" | "blue";
interface IButtonProps {
  text: string;
  type?: TButtonType;
  color?: TButtonColor;
  disabled?: boolean;
}

const { text, type, color, disabled } = withDefaults(
  defineProps<IButtonProps>(),
  {
    type: "fill",
    color: "orange",
    disabled: false,
  }
);
const emits = defineEmits(["click"]);

const buttonClasses = computed(() => {
  if (disabled) return `button_${type}_disabled`;
  return `button_${type}-${color}`;
});
</script>

<style scoped lang="scss">
@import "@assets/styles/components/Button.scss";
</style>
