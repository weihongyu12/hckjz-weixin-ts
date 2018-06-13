<template>
  <div class="page">
    <div class="cover">
      <h2>{{ title }}</h2>
      <p>{{ company }}</p>
      <p>{{ place }}/{{ experience }}/{{ education }} - <strong>{{ salary }}</strong></p>
    </div>
    <article-content
      :content="content"
      :address="address"
      :home-page="homePage"/>
    <van-button
      type="primary"
      class="button-bottom"
      bottom-action>投递简历
    </van-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

const ArticleContent = () => import('@/components/article-content.vue');

export default Vue.extend({
  name: 'PositionDetail',
  components: {
    ArticleContent,
  },
  data() {
    return {
      title: 'web前端工程师',
      company: '广东航宇卫星科技有限公司',
      place: '汕头',
      experience: '3-5年',
      education: '本科',
      salary: '4-6K',
      content: '#### 正文部分',
      address: '广东省汕头市中山东路珠池港区3号航天卫星大厦 ',
      homePage: 'http://www.515cn.com/',
    };
  },
});
</script>

<style lang="scss" scoped>
  .page {
    position: relative;
    margin-bottom: 50px;
  }

  .cover {
    background-image: linear-gradient(70deg, #2196f3, #4fc3f7);
    padding: 15px;
    color: #fff;
  }

  .button-bottom {
    position: fixed;
    bottom: 0;
  }
</style>
