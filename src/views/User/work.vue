<template>
  <div>
    <router-link
      :to="{name: 'user-work-edit'}"
      class="item item--align-items-center">
      <div class="item__main">
        <h3 class="item__title">广东航宇卫星科技有限公司</h3>
        <p class="item__desc">web前端工程师</p>
        <p class="item__desc">2014年9月-2018年7月</p>
      </div>
      <van-icon
        name="arrow"
        class="item__icon"/>
    </router-link>
    <div class="button-container">
      <van-button
        type="primary"
        size="large"
        @click="$router.push({name: 'user-work-add'})">添加工作经历</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'UserWork',
});
</script>
