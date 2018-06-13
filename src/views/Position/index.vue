<template>
  <div>
    <van-search
      v-model="value"
      placeholder="请输入职位名称" />
    <position-list :list="list"/>
    <app-tabbar/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

const AppTabbar = () => import('@/components/app-tabbar.vue');
const PositionList = () => import('@/components/position-list.vue');

export default Vue.extend({
  name: 'Position',
  components: {
    AppTabbar,
    PositionList,
  },
  data() {
    return {
      value: null,
      list: [
        {
          id: 1,
          title: 'Web前端工程师',
          company: '广东航宇卫星科技有限公司',
          place: '汕头',
          experience: '3-5年',
          education: '本科',
          salary: '4-6K',
        },
      ],
    };
  },
});
</script>
