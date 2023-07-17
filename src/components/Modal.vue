<template>
  <teleport to="body">
    <transition name="modal">
      <div class="modal" v-if="isOpen">
        <div class="modal__content">
          <div class="modal__close" @click="emits('close')">
            <Icon name="close" />
          </div>

          <div class="modal__body">
            <img class="modal__img" v-if="img" :src="img" alt="image" />

            <p class="modal__title">{{ title }}</p>
            <p class="modal__message">{{ message }}</p>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { IDialogMessage } from "@/interfaces/IDialogMessage";
import Icon from "@components/Icon.vue";

interface IDialogProps extends IDialogMessage {
  isOpen: boolean;
}

const { isOpen, title, message, img } = defineProps<IDialogProps>();
const emits = defineEmits(["close"]);
</script>

<style scoped lang="scss">
@import "@assets/styles/components/Modal.scss";
</style>
@/interfaces/IDialogMessage
