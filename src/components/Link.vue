<template>
  <div class="link" @click="emits('click', href)">
    <p class="link__text text">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
interface ILinkProps {
  text: string;
  href: string;
}

const { text, href } = defineProps<ILinkProps>();
const emits = defineEmits(["click"]);
</script>

<style scoped lang="scss">
@import "@assets/styles/components/Link.scss";
</style>
