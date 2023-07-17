<template>
  <div class="storage-card">
    <p class="storage-card__title info-text">{{ title }}</p>
    <p class="storage-card__price text">Стоимость {{ price }} монет</p>
    <p class="storage-card__quantity">{{ quantity }} шт</p>
    <Button
      class="storage-card__button"
      text="Продать"
      type="stroke"
      color="blue"
      :disabled="isDisabled"
      :key="String(isDisabled)"
      @click="sellDetail"
    />
  </div>
</template>

<script setup lang="ts">
import { LIMIT_COINS_QUANTITY } from "@/constants/coins";
import { IStorageDetail } from "@/interfaces/storage/IStorageDetail";
import { useStorageStore } from "@/store/storage";
import { useWalletStore } from "@/store/wallet";

import Button from "@components/Button.vue";

import { computed } from "vue";

const { id, title, price, quantity } = defineProps<IStorageDetail>();
const emits = defineEmits(["error"]);

const storageStore = useStorageStore();
const { SELL_DETAIL } = storageStore;

const walletStore = useWalletStore();
const { ADD_COINS } = walletStore;
const coinsQuantity = computed(() => walletStore.coinsQuantity);

const sellDetail = () => {
  if (coinsQuantity.value + price <= LIMIT_COINS_QUANTITY) {
    ADD_COINS({ price });
    SELL_DETAIL(id);
  } else {
    emits("error");
  }
};

const isDisabled = computed(() => {
  const storageDetail = storageStore.details.find((detail) => detail.id === id);
  return storageDetail && Boolean(!storageDetail.quantity);
});
</script>

<style scoped lang="scss">
@import "@assets/styles/components/storage/StorageCard.scss";
</style>
