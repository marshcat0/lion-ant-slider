<template>
  <div class="gallery">
    <div class="gallery-container" @click="onGalleryClick">
      <img
        class="gallery-item"
        :class="{
          'gallery-item-1':
            index === (activeIndex + images.length - 1) % images.length,
          'gallery-item-2': index === activeIndex,
          'gallery-item-3': index === (activeIndex + 1) % images.length,
        }"
        v-for="(image, index) in images"
        :key="index"
        :src="image"
      />
    </div>
  </div>
  <span @click="next">下一个</span>
  <span @click="prev">上一个</span>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, toRef } from "vue";
const props = withDefaults(
  defineProps<{
    // 受控模式新增的prop
    activeIndex: number;
    // 轮播的图片地址
    images: string[];
    // 轮番展示的图片数
    displayNumber?: number;
    // 每次轮播的时间间隔
    stepInterval: number;
    // 点击事件
    onClickNext: (index: number) => void;
    onClickPrev: (index: number) => void;
  }>(),
  {
    activeIndex: 0,
    images: () => [],
    displayNumber: 3,
    stepInterval: 3000,
    onClickNext: () => {
      console.log("next");
    },
    onClickPrev: () => {
      console.log("prev");
    },
  }
);
const emit = defineEmits<{
  (e: "update:activeIndex", activeIndex: number): void;
}>();
const activeIndex = toRef(props, "activeIndex");

const onGalleryClick = (event: Event) => {
  const target = event.target as HTMLElement;
  if (target?.tagName !== "IMG") return;

  const reg = /gallery-item-(\d)/;
  const sliderNo = target.className.match(reg)?.[1];
  sliderNo === "1" && prev();
  sliderNo === "3" && next();
};
const next = () => {
  props.onClickNext(activeIndex.value);
  emit("update:activeIndex", (activeIndex.value + 1) % props.images.length);
};
const prev = () => {
  props.onClickPrev(activeIndex.value);
  emit(
    "update:activeIndex",
    (activeIndex.value - 1 + props.images.length) % props.images.length
  );
};

let intervalId: number;
onMounted(() => {
  intervalId = setInterval(next, props.stepInterval);
});
onUnmounted(() => {
  clearInterval(intervalId);
});
</script>
<style lang="less" scoped>
.gallery {
  width: 100%;
  .gallery-container {
    align-items: center;
    display: flex;
    height: 300px;
    margin: 0 auto;
    max-width: 1000px;
    position: relative;
    .gallery-item {
      height: 150px;
      opacity: 0;
      position: absolute;
      transition: all 0.3s ease-in-out;
      width: 150px;
      z-index: 0;
      left: 50%;
    }
    .gallery-item-1,
    .gallery-item-3 {
      height: 150px;
      opacity: 1;
      width: 150px;
      z-index: 1;
    }
    .gallery-item-1 {
      left: 25%;
      transform: translateX(-50%);
    }
    .gallery-item-3 {
      left: 75%;
      transform: translateX(-50%);
    }
    .gallery-item-2 {
      box-shadow: 0 0 30px rgba(255, 255, 255, 0.6),
        0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25),
        0 0 100px rgba(255, 255, 255, 0.1);
      height: 200px;
      opacity: 1;
      left: 50%;
      transform: translateX(-50%);
      width: 200px;
      z-index: 2;
    }
  }
}
</style>
