<template>
  <div class="robot-type">
    <p class="robot-type__title medium-text">Тип робота:</p>

    <div class="robot-type__radios">
      <Radio
        class="robot-type__radio"
        v-model="robotType"
        :label="FRONTEND"
        :name="FRONTEND"
        :value="FRONTEND"
        :key="robotType"
        @update:model-value="changeRobotType"
      />
      <Radio
        class="robot-type__radio"
        v-model="robotType"
        :label="DESIGN"
        :name="DESIGN"
        :value="DESIGN"
        :key="robotType"
        @update:model-value="changeRobotType"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { DESIGN, FRONTEND } from "@/constants/production/robotType";
import Radio from "@components/Radio.vue";

import { ref, watch } from "vue";

const emits = defineEmits(["change"]);

const robotType = ref(FRONTEND);
const changeRobotType = () => {
  emits("change", robotType.value);
};

watch(
  robotType,
  () => {
    changeRobotType();
  },
  { immediate: true }
);
</script>

<style scoped lang="scss">
@import "@assets/styles/components/production/RobotType.scss";
</style>
