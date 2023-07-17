<template>
  <div class="header">
    <Icon name="logo" class="header__logo" />
    <Button
      class="header__button"
      text="Произвести биоробота"
      type="stroke"
      color="orange"
    />
  </div>
</template>

<script setup lang="ts">
import Button from "@components/Button.vue";
import Icon from "@components/Icon.vue";
</script>

<style scoped lang="scss">
@import "@assets/styles/components/Header.scss";
</style>
