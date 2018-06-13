<template>
  <div>
    <div class="cover">
      <h2>{{ title }}</h2>
      <p>{{ place }}</p>
      <p>{{ stage }}/{{ scale }}/{{ business }}</p>
    </div>
    <van-tabs v-model="active">
      <van-tab title="公司">
        <article-content
          :content="content"
          :address="address"
          :home-page="homePage"/>
      </van-tab>
      <van-tab title="职位">
        <position-list :list="list"/>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

const ArticleContent = () => import('@/components/article-content.vue');
const PositionList = () => import('@/components/position-list.vue');

export default Vue.extend({
  name: 'Company',
  components: {
    ArticleContent,
    PositionList,
  },
  data() {
    return {
      title: '广东航宇卫星科技有限公司',
      place: '汕头',
      stage: '不需要融资',
      scale: '100-150人',
      business: '企业服务',
      active: '公司',
      content: '#### 正文部分',
      address: '广东省汕头市中山东路珠池港区3号航天卫星大厦 ',
      homePage: 'http://www.515cn.com/',
      list: [
        {
          id: 1,
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

<style scoped>
  .cover {
    background-image: linear-gradient(70deg, #2196f3, #4fc3f7);
    padding: 15px;
    color: #fff;
  }
</style>
