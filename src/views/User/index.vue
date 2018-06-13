<template>
  <div>
    <div class="cover">
      <img
        src="@/assets/logo.png"
        class="avatar">
      <h2 class="name">宋民国</h2>
    </div>
    <van-cell-group>
      <van-cell
        :to="{name: 'user-base'}"
        title="基本信息"
        is-link />
      <van-cell
        :to="{name: 'user-work'}"
        title="工作经历"
        is-link />
      <van-cell
        :to="{name: 'user-education'}"
        title="教育经历"
        is-link />
    </van-cell-group>
    <app-tabbar/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

const AppTabbar = () => import('@/components/app-tabbar.vue');

export default Vue.extend({
  name: 'User',
  components: {
    AppTabbar,
  },
});
</script>

<style scoped>
  .cover {
    background-image: linear-gradient(70deg, #2196F3, #4FC3F7);
    text-align: center;
    padding: 15px;
    color: #fff;
  }

  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 100%;
  }
</style>
