<template>
  <div class="production">
    <div class="production__header">
      <SectionNumber class="production__number" number="05" />
      <SectionTitle class="production__title" title="Производство" />
    </div>

    <div class="production__content">
      <div class="production__characteristics">
        <RobotType @change="chageRobotType" />
        <Stabilizer @change="changeStabilizer" />
      </div>
      <Details class="production__details" />
      <div class="production__actions">
        <Button
          class="production__button"
          text="Произвести за 10 монет"
          type="stroke"
          :key="String(canCreate)"
          :disabled="canCreate"
          @click="createRobot"
        />
        <ProductionMessage class="production__message" />
      </div>
    </div>
    <div class="production__robot">
      <RobotImg :path="robotImg" />
    </div>
    <Modal
      @close="changeDialogVisible"
      :is-open="isOpen"
      :title="modalContent.title"
      :message="modalContent.message"
    />
  </div>
</template>

<script setup lang="ts">
import Button from "@components/Button.vue";
import Modal from "@components/Modal.vue";
import SectionNumber from "@components/SectionNumber.vue";
import SectionTitle from "@components/SectionTitle.vue";
import Details from "@components/production/Details.vue";
import ProductionMessage from "@components/production/ProductionMessage.vue";
import RobotImg from "@components/production/RobotImg.vue";
import RobotType from "@components/production/RobotType.vue";
import Stabilizer from "@components/production/Stabilizer.vue";

import { CREATE_PRICE } from "@/constants/details";
import { MESSAGE_CREATED } from "@/constants/message-created";
import { FRONTEND } from "@/constants/production/robotType";
import { MALE } from "@/constants/production/stabilizer";
import { TRobot, TStabilizer } from "@/constants/robots";
import { IDialogMessage } from "@/interfaces/IDialogMessage";
import { getRobotImage } from "@/utils/getRobotImage";

import { useStorageStore } from "@/store/storage";
import { useWalletStore } from "@/store/wallet";
import { Ref, computed, ref } from "vue";

const walletStore = useWalletStore();
const coinsQuantity = computed(() => walletStore.coinsQuantity);
const { BUY_ROBOT } = walletStore;

const storageStore = useStorageStore();
const { CREATE_ROBOT } = storageStore;
const details = computed(() => storageStore.details);

const isCreated = ref(false);
const robotType = ref(FRONTEND) as Ref<TRobot>;
const stabilizer = ref(MALE) as Ref<TStabilizer>;
const isOpen = ref(false);
const modalContent: Ref<IDialogMessage> = ref(MESSAGE_CREATED);

const canCreate = computed(
  () =>
    coinsQuantity.value < CREATE_PRICE ||
    details.value.some(
      ({ selected, requiredAmount }) => selected < requiredAmount
    )
);
const robotImg = computed(() =>
  getRobotImage({
    type: robotType.value,
    stabilizer: stabilizer.value,
    canCreate: !canCreate.value,
    created: isCreated.value,
  })
);

const chageRobotType = (type: TRobot) => {
  robotType.value = type;
  isCreated.value = false;
};

const changeStabilizer = (newStabilizer: TStabilizer) => {
  stabilizer.value = newStabilizer;
  isCreated.value = false;
};

const changeDialogVisible = () => {
  isOpen.value = !isOpen.value;
};

const createRobot = () => {
  isCreated.value = true;

  changeDialogVisible();
  Promise.all([CREATE_ROBOT(), BUY_ROBOT()]);
};
</script>

<style scoped lang="scss">
@import "@assets/styles/sections/Production.scss";
</style>
