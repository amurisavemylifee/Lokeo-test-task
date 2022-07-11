<template>
  <div class="select-wrapper" ref="wrapper" :class="{ '--opened': isOpen }">
    <div class="label">{{ label }}</div>
    <div
      class="select-content"
      :class="{
        '--active': selectValue === 'Активен',
        '--blocked': selectValue === 'Заблокирован',
        '--deactivated': selectValue === 'Деактивирован',
      }"
      @click="isOpen = !isOpen"
    >
      <div class="select-value">{{ selectValue }}</div>
      <svg
        width="10"
        height="4"
        viewBox="0 0 10 4"
        fill="#2A341D"
        class="select-arrow"
      >
        <path d="M5 4L0.669873 0.25L9.33013 0.250001L5 4Z" />
      </svg>
    </div>
    <ul class="select-dropdown" :class="{ '--opened': isOpen }">
      <li v-for="item in options" @click="listItemClickHandler(item)">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
export default {
  props: {
    options: { type: Array, default: () => ["Empty Options"] },
    modelValue: String,
    label: String,
  },
  setup(props, ctx) {
    const isOpen = ref(false);
    const selectValue = ref(props.modelValue);
    function listItemClickHandler(item) {
      selectValue.value = item;
      isOpen.value = false;
      ctx.emit("update:modelValue", selectValue.value);
    }
    function closeFunction(e) {
      if (!wrapper.value.contains(e.target)) {
        isOpen.value = false;
      }
    }
    const wrapper = ref(null);
    onMounted(() => {
      window.addEventListener("click", closeFunction);
    });
    onUnmounted(() => {
      window.removeEventListener("click", closeFunction);
    });

    return { isOpen, selectValue, wrapper, listItemClickHandler };
  },
};
</script>

<style lang="scss" scoped>
.select-arrow {
  position: absolute;
  top: 18px;
  right: 10px;
  transition-duration: 250ms;
}
.select-wrapper {
    position: relative;
  --content-border-radius: 4px;
  &.--opened {
    --content-border-radius: 4px 4px 0 0;
    .select-arrow {
      transform: rotate(180deg);
    }
  }
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
  .label {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    padding-bottom: 4px;
    cursor: auto;
  }
  .select-value {
    display: inline-block;
  }
  .select-dropdown {
    position: absolute;
    display: none;
    border: 1px rgb(225, 225, 225) solid;
    top: 63px;
    left: 0;
    right: 0;
    border-top: 0;
    border-radius: 0 0 4px 4px;
    &.--opened {
      display: block;
    }
    z-index: 1000;
    li {
      padding: 5px 0;
      text-align: center;
      color: black;
      background-color: rgb(255, 255, 255);
      font-weight: 400;
      font-size: 16px;
      &:hover {
        background-color: rgb(225, 225, 225);
      }
    }
  }
  .select-content {
    position: relative;
    min-width: 160px;
    background-color: #fff;
    border: 1px solid #ededed;
    border-radius: 4px;
    border-radius: var(--content-border-radius);
    padding: 10px 10px 10px 15px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #2a341d;
  }
}
</style>