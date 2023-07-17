<template>
  <h2 class="section-title">{{ title }}</h2>
</template>

<script setup lang="ts">
interface ISectionTitle {
  title: string;
}

const { title } = defineProps<ISectionTitle>();
</script>

<style scoped lang="scss">
@import "@assets/styles/components/SectionTitle.scss";
</style>
