<script setup lang="ts">
import Main from "@/sections/Main.vue";
import Market from "@/sections/Market.vue";
import Production from "@/sections/Production.vue";
import Storage from "@/sections/Storage.vue";
import Wallet from "@/sections/Wallet.vue";
import Header from "@components/Header.vue";
</script>

<template>
  <div class="app">
    <Header />
    <Main />
    <Wallet />
    <Market />
    <Storage />
    <Production />
  </div>
</template>

<style scoped lang="scss">
@import "@assets/styles/app.scss";
</style>
