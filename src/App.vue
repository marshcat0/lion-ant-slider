<template>
  <Slider
    v-model:activeIndex="activeIndex"
    :images="images"
    :stepInterval="stepInterval"
    :onClickNext="onClickNext"
    :onClickPrev="onClickPrev"
  />
</template>

<script lang="ts" setup>
import Slider from "@/components/Slider/index.vue";
import { ref } from "vue";

const activeIndex = ref(0);
const images = [
  "http://fakeimg.pl/300/?text=1",
  "http://fakeimg.pl/300/?text=2",
  "http://fakeimg.pl/300/?text=3",
  "http://fakeimg.pl/300/?text=4",
  "http://fakeimg.pl/300/?text=5",
];
const stepInterval = 3000;
const onClickNext = () => {
  console.log("next");
};
const onClickPrev = () => {
  console.log("prev");
};
</script>

<style scoped lang="less"></style>
