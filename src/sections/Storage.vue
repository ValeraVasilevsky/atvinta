<template>
  <div class="storage">
    <div class="storage__header">
      <SectionNumber class="storage__number" number="04" />
      <SectionTitle class="storage__title" title="Склад" />
    </div>

    <div class="storage__accessories">
      <StorageCard
        :required-amount="detail.requiredAmount"
        class="storage__card"
        v-for="detail of detailts"
        :key="detail.id"
        :selected="detail.selected"
        :id="detail.id"
        :title="detail.title"
        :price="detail.price"
        :quantity="detail.quantity"
        @error="changeDialogVisible"
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
import Modal from "@components/Modal.vue";
import SectionNumber from "@components/SectionNumber.vue";
import SectionTitle from "@components/SectionTitle.vue";
import StorageCard from "@components/storage/StorageCard.vue";

import { EXCEEDING_THE_LIMIT } from "@/constants/error";
import { useStorageStore } from "@/store/storage";

import { computed, ref } from "vue";

const storageStore = useStorageStore();

const detailts = computed(() => storageStore.details);

const isOpen = ref(false);
const changeDialogVisible = () => {
  isOpen.value = !isOpen.value;
};
const modalContent = ref(EXCEEDING_THE_LIMIT);
</script>

<style scoped lang="scss">
@import "@assets/styles/sections/Storage.scss";
</style>
