<template>
  <van-list>
    <home-company-item
      v-for="item of list"
      :key="item.id"
      :data="item"/>
  </van-list>
</template>

<script lang="ts">
import Vue from 'vue';
import HomeCompanyItem from './home-company-item.vue';

export default Vue.extend({
  name: 'HomeCompany',
  components: {
    HomeCompanyItem,
  },
  data() {
    return {
      list: [
        {
          id: 1,
          title: '广东航宇卫星科技有限公司',
          place: '汕头',
          stage: '不需要融资',
          scale: '100-150人',
          business: '企业服务',
        },
      ],
    };
  },
});
</script>
