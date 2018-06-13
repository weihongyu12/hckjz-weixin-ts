<template>
  <router-link
    :to="detailLink"
    class="item">
    <div class="item__main">
      <h3 class="item__title">{{ data.title }}</h3>
      <p class="item__desc">{{ data.company }}</p>
      <p class="item__desc">{{ data.place }}/{{ data.experience }}/{{ data.education }}</p>
    </div>
    <div class="item__status">{{ data.salary }}</div>
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PositionItem',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    detailLink():object {
      return {
        name: 'position-detail',
        params: {
          id: this.data.id,
        },
      };
    },
  },
});
</script>
