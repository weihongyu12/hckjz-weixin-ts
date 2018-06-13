<template>
  <position-list :list="list"/>
</template>

<script lang="ts">
import Vue from 'vue';

const PositionList = () => import('@/components/position-list.vue');

export default Vue.extend({
  name: 'HomePosition',
  components: {
    PositionList,
  },
  data() {
    return {
      list: [
        {
          id: 1,
          title: 'web前端工程师',
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
