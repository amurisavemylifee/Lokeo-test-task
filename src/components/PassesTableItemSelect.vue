<template>
  <div class="select-wrapper" ref="wrapper" :class="{ '--opened': isOpen }">
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
        fill="none"
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
  props: { modelValue: String },
  setup(props, ctx) {
    const isOpen = ref(false);
    const selectValue = ref(props.modelValue);
    const options = ["Активен", "Деактивирован", "Заблокирован"];
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

    return { isOpen, options, selectValue, wrapper, listItemClickHandler };
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
  .select-value {
    display: inline-block;
  }
  .select-dropdown {
    position: absolute;
    display: none;
    border: 1px rgb(225, 225, 225) solid;
    border-top: 0;
    border-radius: 0 0 4px 4px;
    &.--opened {
      display: block;
    }
    width: 160px;
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
    border-radius: var(--content-border-radius);
    padding: 10px 10px 10px 13px;
    &.--active {
      background: #78b62c0d;
      color: #7ea613;
      svg {
        fill: #7ea613;
      }
    }
    &.--deactivated {
      background: #f7f7f7;
      color: #a0a0a0;
      svg {
        fill: #a0a0a0;
      }
    }
    &.--blocked {
      color: #e23737;
      svg {
        fill: #e23737;
      }
      background: #e236360d;
    }
  }
}
</style>