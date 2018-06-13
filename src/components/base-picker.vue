<template>
  <transition name="slide">
    <div
      v-if="show"
      class="picker">
      <van-picker
        :columns="columns"
        :title="title"
        show-toolbar
        @confirm="onConfirm"
      />
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BasePicker',
  props: {
    columns: {
      type: Array,
      required: true,
    },
    show: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    onConfirm(value:string):void {
      this.$emit('success', value);
    },
  },
});
</script>
