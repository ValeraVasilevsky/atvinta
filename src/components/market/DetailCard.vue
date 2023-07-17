<template>
  <div class="detail-card">
    <img class="detail-card__img" :src="img" :alt="title" />
    <p class="detail-card__title info-text">{{ title }}</p>
    <p class="detail-card__price text">Стоимость {{ price }} монет</p>
    <Button
      class="detail-card__button"
      text="Установить"
      :disabled="isDisabled"
      @click="installDetail"
      :key="String(isDisabled)"
    />
  </div>
</template>

<script setup lang="ts">
import Button from "@components/Button.vue";

import { MIN_COINS_QUANTITY } from "@/constants/coins";
import { IDetailCard } from "@/interfaces/market/IDetailCard";
import { useStorageStore } from "@/store/storage";
import { useWalletStore } from "@/store/wallet";

import { computed } from "vue";

const { id, img, title, price } = defineProps<IDetailCard>();

const walletStore = useWalletStore();
const { BUY_DETAIL } = walletStore;
const { ADD_DETAIL } = useStorageStore();

const installDetail = () => {
  ADD_DETAIL(id);
  BUY_DETAIL(price);
};

const isDisabled = computed(
  () => walletStore.coinsQuantity - price < MIN_COINS_QUANTITY
);
</script>

<style scoped lang="scss">
@import "@assets/styles/components/market/DetailCard.scss";
</style>
