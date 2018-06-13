<template>
  <div>
    <home-swipe :images="swipeItems"/>
    <van-tabs v-model="active">
      <van-tab title="公司">
        <home-company/>
      </van-tab>
      <van-tab title="职位">
        <home-position/>
      </van-tab>
    </van-tabs>
    <app-tabbar/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Image from '../../assets/logo.png';
import HomeSwipe from './components/home-swipe.vue';
import HomeCompany from './components/home-company.vue';
import HomePosition from './components/home-position.vue';

const AppTabbar = () => import('@/components/app-tabbar.vue');

export default Vue.extend({
  name: 'Home',
  components: {
    AppTabbar,
    HomeSwipe,
    HomeCompany,
    HomePosition,
  },
  data() {
    return {
      swipeItems: [
        Image,
      ],
      active: '公司',
    };
  },
});
</script>
