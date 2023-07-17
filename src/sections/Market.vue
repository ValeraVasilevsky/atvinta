<template>
  <div class="market">
    <div class="market__header">
      <SectionNumber class="market__number" number="03" />
      <SectionTitle class="market__title" title="Рынок комплектующих" />
    </div>

    <div class="market__accessories">
      <DetailCard
        class="market__card"
        v-for="card of DETAIL_CARDS"
        :key="card.id"
        :id="card.id"
        :title="card.title"
        :img="card.img"
        :price="card.price"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionNumber from "@components/SectionNumber.vue";
import SectionTitle from "@components/SectionTitle.vue";
import DetailCard from "@components/market/DetailCard.vue";

import { DETAIL_CARDS } from "@/constants/market/detailCards";
</script>

<style scoped lang="scss">
@import "@assets/styles/sections/Market.scss";
</style>
