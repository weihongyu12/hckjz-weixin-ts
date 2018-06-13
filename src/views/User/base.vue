<template>
  <div>
    <div class="cell-group">
      <van-cell-group>
        <van-field
          v-model="name"
          label="姓名"/>
        <van-field
          v-model="name"
          label="性别"
          @focus="pickerGenderShow = true"
          @blur="pickerGenderShow = false"/>
        <van-field
          v-model="name"
          label="出生年月"
          @focus="datetimePickerShow = true"
          @blur="datetimePickerShow = false"/>
      </van-cell-group>
    </div>
    <div class="cell-group">
      <van-cell-group>
        <van-field
          v-model="name"
          label="最高学历"
          @focus="pickerEducationShow = true"
          @blur="pickerEducationShow = false"/>
        <van-field
          v-model="name"
          type="number"
          label="工作年限"/>
      </van-cell-group>
    </div>
    <div class="cell-group">
      <van-cell-group>
        <van-field
          v-model="name"
          type="tel"
          label="手机"/>
        <van-field
          v-model="name"
          label="邮箱"/>
      </van-cell-group>
    </div>
    <div class="button-container">
      <van-button
        type="primary"
        size="large">保存</van-button>
    </div>
    <base-picker
      :columns="columnsGender"
      :show="pickerGenderShow"/>
    <base-picker
      :columns="columnsEducation"
      :show="pickerEducationShow"/>
    <datetime-picker :show="datetimePickerShow"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

const BasePicker = () => import('@/components/base-picker.vue');
const DatetimePicker = () => import('@/components/datetime-picker.vue');

export default Vue.extend({
  name: 'UserBase',
  components: {
    BasePicker,
    DatetimePicker,
  },
  data() {
    return {
      name: '',
      datetimePickerShow: false,
      pickerGenderShow: false,
      pickerEducationShow: false,
      columnsGender: ['男', '女'],
      columnsEducation: ['初中及以下', '中专', '高中', '大专', '本科', '研究生及以上'],
    };
  },
});
</script>
