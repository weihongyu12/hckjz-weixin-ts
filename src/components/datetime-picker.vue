<template>
  <transition name="slide">
    <div
      v-if="show"
      class="picker">
      <van-datetime-picker
        v-model="currentDate"
        type="year-month"
        @confirm="onConfirm"/>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DatetimePicker',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentDate: new Date(),
    };
  },
  methods: {
    onConfirm(value:string):void {
      this.$emit('success', value);
    },
  },
});
</script>
