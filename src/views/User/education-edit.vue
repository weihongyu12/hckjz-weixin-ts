<template>
  <div>
    <div class="cell-group">
      <van-cell-group>
        <van-field
          v-model="name"
          label="学校"/>
        <van-field
          v-model="name"
          label="专业"/>
      </van-cell-group>
    </div>
    <div class="cell-group">
      <van-cell-group>
        <van-field
          v-model="name"
          label="毕业时间"
          @focus="datetimePickerShow = true"
          @blur="datetimePickerShow = false"/>
        <van-field
          v-model="name"
          label="学历"/>
      </van-cell-group>
    </div>
    <div class="button-container">
      <van-button
        type="primary"
        size="large">保存</van-button>
    </div>
    <div class="button-container">
      <van-button
        type="danger"
        size="large">删除</van-button>
    </div>
    <datetime-picker :show="datetimePickerShow"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

const DatetimePicker = () => import('@/components/datetime-picker.vue');

export default Vue.extend({
  name: 'EducationEdit',
  components: {
    DatetimePicker,
  },
  data() {
    return {
      name: '',
      datetimePickerShow: false,
    };
  },
});
</script>
