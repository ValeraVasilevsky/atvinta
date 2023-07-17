<template>
  <div class="details">
    <div class="details__wrapper" v-for="detail of details" :key="detail.id">
      <DetailIcon
        v-for="(icon, index) of detail.requiredAmount"
        :key="getUniqueKey(detail.quantity, index)"
        :name="detail.id"
        :index="index"
        :detail-id="detail.id"
        :id="String(icon)"
        @select="selectDetail"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStorageStore } from "@/store/storage";

import DetailIcon from "@components/production/DetailIcon.vue";
import { computed } from "vue";

const storageStore = useStorageStore();
const details = computed(() => storageStore.details);
const { INCREMENT_SELECTED_DETAILS, DECREMENT_SELECTED_DETAILS } = storageStore;

const getUniqueKey = (quantity: number, index: number) =>
  `${quantity}-${index}`;

const selectDetail = ({
  detailId,
  isSelected,
}: {
  detailId: string;
  isSelected: boolean;
}) => {
  isSelected
    ? INCREMENT_SELECTED_DETAILS(detailId)
    : DECREMENT_SELECTED_DETAILS(detailId);
};
</script>

<style scoped lang="scss">
@import "@assets/styles/components/production/Details.scss";
</style>
