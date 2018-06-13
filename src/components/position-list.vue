<template>
  <van-list>
    <position-list-item
      v-for="item of list"
      :key="item.id"
      :data="item"/>
  </van-list>
</template>

<script lang="ts">
import Vue from 'vue';
import PositionListItem from '@/components/position-list-item.vue';

export default Vue.extend({
  name: 'PositionList',
  components: {
    PositionListItem,
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
});
</script>
