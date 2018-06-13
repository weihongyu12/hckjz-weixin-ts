<template>
  <van-tabbar
    v-model="active"
    @change="changeTabbar">
    <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
    <van-tabbar-item icon="like-o">职位</van-tabbar-item>
    <van-tabbar-item icon="contact">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'AppTabbar',
  data() {
    return {
      active: 0,
    };
  },
  mounted() {
    this.active = this.$route.meta.tabbar;
  },
  methods: {
    changeTabbar(active: number):void {
      if (active === 0) {
        this.$router.push({ name: 'home' });
      } else if (active === 1) {
        this.$router.push({ name: 'position' });
      } else {
        this.$router.push({ name: 'user' });
      }
    },
  },
});
</script>
