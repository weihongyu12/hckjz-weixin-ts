<template>
  <div>
    <div class="cell-group">
      <van-cell-group>
        <van-field
          v-model="name"
          label="公司名称"/>
        <van-field
          v-model="name"
          label="职位"/>
      </van-cell-group>
    </div>
    <div class="cell-group">
      <van-cell-group>
        <van-field
          v-model="name"
          label="入职时间"
          @focus="datetimePickerShow = true"
          @blur="datetimePickerShow = false"
        />
        <van-field
          v-model="name"
          label="离职时间"
          @focus="datetimePickerShow = true"
          @blur="datetimePickerShow = false"/>
      </van-cell-group>
    </div>
    <div class="cell-group">
      <van-cell-group>
        <van-field
          v-model="name"
          type="textarea"
          label="工作内容"
          autosize/>
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
  name: 'WorkEdit',
  components: {
    DatetimePicker,
  },
  data() {
    return {
      name: '',
      datetimePickerShow: false,
      currentDate: new Date(),
    };
  },
});
</script>
