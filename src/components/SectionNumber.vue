<template>
  <div class="section-number">
    <p class="section-number__text">{{ number }}</p>
  </div>
</template>

<script setup lang="ts">
interface ISectionNumber {
  number: string;
}

const { number } = defineProps<ISectionNumber>();
</script>

<style scoped lang="scss">
@import "@assets/styles/components/SectionNumber.scss";
</style>
