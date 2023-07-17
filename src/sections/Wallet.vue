<template>
  <div class="wallet">
    <div class="wallet__header">
      <SectionNumber class="wallet__number" number="02" />
      <SectionTitle class="wallet__title" title="Кошелек криптовалют" />
    </div>

    <Coins class="wallet__coins" />
  </div>
</template>

<script setup lang="ts">
import SectionNumber from "@components/SectionNumber.vue";
import SectionTitle from "@components/SectionTitle.vue";
import Coins from "@components/wallet/Coins.vue";
</script>

<style scoped lang="scss">
@import "@assets/styles/sections/Wallet.scss";
</style>
