<template>
  <component :is="$route.meta.layout + 'Layout'"><router-view /></component>
  <app-modal></app-modal>
</template>
<script>
import WithNavLayout from "./layouts/WithNavLayout.vue";
import WithoutNavLayout from "./layouts/WithoutNavLayout.vue";
import AppModal from "./components/AppModal.vue";
export default {
  components: { WithNavLayout, WithoutNavLayout, AppModal },
};
</script>