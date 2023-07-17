<template>
  <div
    class="detail-icon"
    @click="selectDetail"
    :class="{ 'detail-icon_selected': isSelected }"
  >
    <Icon :color="iconColor" :name="name" :key="iconColor" />
  </div>
</template>

<script setup lang="ts">
import { useStorageStore } from "@/store/storage";
import colors from "@assets/styles/variables/_colors.module.scss";
import Icon from "@components/Icon.vue";
import { computed, onMounted, ref } from "vue";

interface IDetailIconProps {
  name: string;
  index: number;
  detailId: string;
  id: string;
}

const { name, index, detailId } = defineProps<IDetailIconProps>();
const emits = defineEmits(["select"]);

const storageStore = useStorageStore();
const details = computed(() => storageStore.details);

const iconColor = ref(colors.Grey);
const isSelected = computed(
  () => iconColor.value === colors.Orange && iconColor.value !== colors.Grey
);

const getIconColor = () => {
  const detail = details.value.find((elem) => elem.id === detailId);

  return detail && index < detail?.quantity
    ? (iconColor.value = colors.White)
    : (iconColor.value = colors.Grey);
};
const selectDetail = () => {
  iconColor.value !== colors.Grey &&
    (iconColor.value =
      iconColor.value === colors.White ? colors.Orange : colors.White);

  iconColor.value !== colors.Grey &&
    emits("select", {
      detailId,
      isSelected: isSelected.value,
    });
};

onMounted(() => getIconColor());
</script>

<style scoped lang="scss">
@import "@assets/styles/components/production/DetailIcon.scss";
</style>
