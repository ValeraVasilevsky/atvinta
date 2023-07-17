<template>
  <div class="robot">
    <img :src="path" class="robot__img" :key="path" />
  </div>
</template>

<script setup lang="ts">
interface IRobotImgProps {
  path: string;
}

const { path } = defineProps<IRobotImgProps>();
</script>

<style scoped lang="scss">
@import "@assets/styles/components/production/RobotImg.scss";
</style>
