<template>
  <div class="stabilizer">
    <p class="stabilizer__title medium-text">Стабилизатор:</p>

    <div class="stabilizer__radios">
      <Radio
        class="stabilizer__radio"
        v-model="stabilizer"
        :label="MALE"
        :name="MALE"
        :value="MALE"
        :key="stabilizer"
        @update:model-value="changeStabilizer"
      />
      <Radio
        class="stabilizer__radio"
        v-model="stabilizer"
        :label="FEMALE"
        :name="FEMALE"
        :value="FEMALE"
        :key="stabilizer"
        @update:model-value="changeStabilizer"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { FEMALE, MALE } from "@/constants/production/stabilizer";
import Radio from "@components/Radio.vue";

import { ref, watch } from "vue";

const emits = defineEmits(["change"]);

const stabilizer = ref(MALE);
const changeStabilizer = () => {
  emits("change", stabilizer.value);
};

watch(stabilizer, () => changeStabilizer(), { immediate: true });
</script>

<style scoped lang="scss">
@import "@assets/styles/components/production/Stabilizer.scss";
</style>
