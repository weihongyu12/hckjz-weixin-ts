<template>
  <van-swipe
    :autoplay="3000"
    class="swipe">
    <van-swipe-item
      v-for="(image, index) in images"
      :key="index"
      :style="{'background-image': 'url(' + image + ')'}"
      class="swipe-item"
    />
  </van-swipe>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HomeSwipe',
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style scoped>
  .swipe {
    height: 200px;
  }

  .swipe-item {
    background: #e3f2fd no-repeat fixed center/cover;
  }
</style>
