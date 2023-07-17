<template>
  <p class="production-message">{{ productionMessage }}</p>
</template>

<script setup lang="ts">
import { CREATE_PRICE } from "@/constants/details";
import { useStorageStore } from "@/store/storage";
import { useWalletStore } from "@/store/wallet";
import { getProductionMessage } from "@/utils/getProductionMessage";
import { computed } from "vue";

const walletStore = useWalletStore();
const coinsQuantity = computed(() => walletStore.coinsQuantity);

const storageStore = useStorageStore();
const details = computed(() => storageStore.details);

const productionMessage = computed(() => {
  const money = [
    {
      id: "money",
      title: "Деньги",
      price: 0,
      quantity: coinsQuantity.value,
      selected: coinsQuantity.value,
      requiredAmount: CREATE_PRICE,
    },
  ];

  return getProductionMessage({
    details: details.value.concat(money),
  });
});
</script>

<style scoped lang="scss">
@import "@assets/styles/components/production/ProductionMessage.scss";
</style>
