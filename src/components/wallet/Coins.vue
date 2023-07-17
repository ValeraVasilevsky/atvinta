<template>
  <div class="coins">
    <div class="coins__images">
      <div class="coins__wrapper" v-for="coin of coinsQuantity" :key="coin">
        <img ref="img" class="coins__img" src="wallet/coin.png" />
      </div>
    </div>

    <p class="coins__quantity">
      <span class="coins__quantity_bold">{{ coinsQuantity }}</span> biorobo
      {{ formattedCoinCase }}
    </p>

    <div class="coins__actions">
      <Link text="Нацыганить" href="" @click="addCoins" />
      <Checkbox
        label="Цыганить по 5 монет"
        name="checkbox"
        v-model="isFiveCoins"
      />
    </div>

    <Modal
      :is-open="isOpen"
      :img="modalContent.img"
      :title="modalContent.title"
      :message="modalContent.message"
      @close="changeDialogVisible"
    />
  </div>
</template>

<script setup lang="ts">
import { COINS_WORDS } from "@/constants/case/case-coins";
import { IDialogMessage } from "@/interfaces/IDialogMessage";
import { useWalletStore } from "@/store/wallet";
import { getFormattedCase } from "@/utils/formatCase";

import Checkbox from "@components/Checkbox.vue";
import Link from "@components/Link.vue";
import Modal from "@components/Modal.vue";

import { Ref, computed, ref } from "vue";

const walletStore = useWalletStore();
const { ADD_COINS } = walletStore;

const coinsQuantity = computed(() => walletStore.coinsQuantity);
const formattedCoinCase = computed(() =>
  getFormattedCase(Number(coinsQuantity.value), COINS_WORDS)
);
const isFiveCoins = ref(false);

const isOpen = ref(false);
const modalContent: Ref<IDialogMessage> = ref({
  img: "",
  title: "",
  message: "",
});

const changeDialogVisible = () => {
  isOpen.value = !isOpen.value;
};
const addCoins = () => {
  try {
    ADD_COINS({ isFiveCoins: isFiveCoins.value });
  } catch (error) {
    if (error instanceof Error) {
      modalContent.value = JSON.parse(error.message);
      changeDialogVisible();
    }
  }
};
</script>

<style scoped lang="scss">
@import "@assets/styles/components/wallet/Coins.scss";
</style>
@/interfaces/IDialogMessage @/constants/case/case-coins
