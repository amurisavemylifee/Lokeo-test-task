<template>
  <button :class="{ full: fullWidth }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    fullWidth: Boolean,
  },
};
</script>
<style lang="scss" scoped>
button {
  padding: 10px 40px;
  background: transparent;
  border: 1px solid #7ea613;
  color: #7ea613;
  border-radius: 2px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  cursor: pointer;
  transition: 0.3s background;
  &:hover {
    background: hsla(76, 79%, 36%, 0.3);
  }
  &:disabled {
    border: 0;
    background: #f7f7f7;
    color: #c3c7cf;
    cursor: not-allowed;
  }
}
.full {
  width: 100%;
}
</style>