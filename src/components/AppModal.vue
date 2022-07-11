<template>
  <div class="modal-wrapper" v-if="!isHidden">
    <button class="close-button" @click="hideModal">X</button>
    <div class="modal-text">
      {{ message }}
    </div>
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
import { useModalStore } from "../store/useModalStore.js";
export default {
  setup() {
    const { message, isHidden } = storeToRefs(useModalStore());
    const { hideModal } = useModalStore();
    return { message, isHidden, hideModal };
  },
};
</script>

<style lang="scss" scoped>
.modal-wrapper {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: #fff;
  width: 300px;
  min-height: 80px;
  border-radius: 8px;
}
.close-button {
  position: absolute;
  right: 3px;
  top: 3px;
  background-color: red;
  padding: 0.5px 5px;
  border: 1px solid gray;
  border-radius: 20px;
  color: gray;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
}
.modal-text {
  padding: 25px 5px;
  word-wrap: break-word;
}
</style>