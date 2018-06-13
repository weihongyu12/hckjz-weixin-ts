<template>
  <div>
    <router-link
      :to="{name: 'user-education-edit'}"
      class="item item--align-items-center">
      <div class="item__main">
        <h3 class="item__title">汕头大学</h3>
        <p class="item__desc">2014年9月-2018年7月</p>
        <p class="item__desc">本科/软件工程专业</p>
      </div>
      <van-icon
        name="arrow"
        class="item__icon"/>
    </router-link>
    <div class="button-container">
      <van-button
        type="primary"
        size="large"
        @click="$router.push({name: 'user-education-add'})">添加教育经历</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'UserEducation',
});
</script>
