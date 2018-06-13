<template>
  <router-link
    :to="detailLink"
    class="item item--align-items-center">
    <div class="item__main">
      <h3 class="item__title">{{ data.title }}</h3>
      <p class="item__desc">{{ data.place }}</p>
      <p class="item__desc">{{ data.stage }}/{{ data.scale }}/{{ data.business }}</p>
    </div>
    <van-icon
      name="arrow"
      class="item__icon"/>
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HomeCompanyItem',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    detailLink(): object {
      return {
        name: 'company',
        params: {
          id: this.data.id,
        },
      };
    },
  },
});
</script>
