<template>
  <div class="input-box">
    <label :for="id">{{ label }}</label>
    <input
      type="text"
      :id="id"
      v-bind="$attrs"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  emits:['update:modelValue'],
  props: {
    label: String,
    modelValue: String
  },
  data() {
    return {
      id: this.$.uid,
    };
  },
  inheritAttrs: false,
};
</script>

<style lang="scss" scoped>
input {
  padding: 11px 13px 11px 13px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  border: 1px solid #ededed;
  border-radius: 4px;
  width: 100%;
}
label {
  display: block;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
}
</style>