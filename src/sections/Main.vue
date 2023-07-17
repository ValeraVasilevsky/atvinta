<template>
  <div class="main">
    <div class="main__content">
      <div class="main__sidebar">
        <SectionNumber number="01" />
        <Scroll />
      </div>

      <div class="main__text">
        <h1 class="main__title">
          Фабрика по <br />производству <br />биороботов
        </h1>
        <h3 class="main__subtitle">класса «монитор-кресло»</h3>
      </div>

      <img class="main__img" :src="MainRobotsImg" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Scroll from "@components/Scroll.vue";
import SectionNumber from "@components/SectionNumber.vue";

import MainRobotsImg from "@assets/img/mainRobots.png";
</script>

<style scoped lang="scss">
@import "@assets/styles/sections/Main.scss";
</style>
