<template>
  <tr>
    <td>{{ options.id }}</td>
    <td>{{ options.person }}</td>
    <td>{{ options.transport }}</td>
    <td class="ID">{{ options.passType.type }}</td>
    <td>
      <span v-for="item in options.checkpoints" :key="item"
        >{{ item }}<br
      /></span>
    </td>
    <td>
      <div class="flex-wrapper">
        <app-select v-model="selectValue"></app-select>
        <svg width="16" height="16" viewBox="0 0 16 16" class="copy-svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 6.75C0 5.7835 0.783502 5 1.75 5H3.25C3.66421 5 4 5.33579 4 5.75C4 6.16421 3.66421 6.5 3.25 6.5H1.75C1.61193 6.5 1.5 6.61193 1.5 6.75V14.25C1.5 14.3881 1.61193 14.5 1.75 14.5H9.25C9.38807 14.5 9.5 14.3881 9.5 14.25V12.75C9.5 12.3358 9.83579 12 10.25 12C10.6642 12 11 12.3358 11 12.75V14.25C11 15.2165 10.2165 16 9.25 16H1.75C0.783502 16 0 15.2165 0 14.25V6.75Z"
            fill="#7EA613"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 1.75C5 0.783502 5.7835 0 6.75 0H14.25C15.2165 0 16 0.783502 16 1.75V9.25C16 10.2165 15.2165 11 14.25 11H6.75C5.7835 11 5 10.2165 5 9.25V1.75ZM6.75 1.5C6.61193 1.5 6.5 1.61193 6.5 1.75V9.25C6.5 9.38807 6.61193 9.5 6.75 9.5H14.25C14.3881 9.5 14.5 9.38807 14.5 9.25V1.75C14.5 1.61193 14.3881 1.5 14.25 1.5H6.75Z"
            fill="#7EA613"
          />
        </svg>
        <svg width="15" height="15" viewBox="0 0 15 15">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.0126 0.512564C10.696 -0.170856 11.804 -0.170854 12.4874 0.512564L13.5732 1.59835C14.2566 2.28176 14.2566 3.3898 13.5732 4.07322L4.96358 12.6829C4.75328 12.8932 4.49286 13.0464 4.2069 13.1281L0.956062 14.0569C0.694162 14.1318 0.412292 14.0587 0.219692 13.8661C0.0270925 13.6735 -0.0459506 13.3917 0.0288724 13.1298L0.957692 9.87888C1.03939 9.59298 1.19262 9.33248 1.40292 9.12218L10.0126 0.512564ZM11.4268 1.57322C11.3291 1.47559 11.1708 1.47559 11.0732 1.57322L9.81063 2.83578L11.25 4.27512L12.5126 3.01256C12.6102 2.91493 12.6102 2.75664 12.5126 2.65901L11.4268 1.57322ZM10.1893 5.33578L8.75002 3.89644L2.46358 10.1829C2.43354 10.2129 2.41165 10.2501 2.39997 10.291L1.84203 12.2438L3.79482 11.6858C3.83567 11.6742 3.87287 11.6523 3.90292 11.6222L10.1893 5.33578Z"
            fill="#7EA613"
          />
        </svg>
      </div>
    </td>
  </tr>
</template>

<script>
import { ref, watch } from "vue";
import AppSelect from "./PassesTableItemSelect.vue";
import { usePassesStore } from "../store/usePassesStore";
export default {
  props: {
    options: Object,
  },
  components: {
    AppSelect,
  },
  setup(props) {
    const { setStatus } = usePassesStore();
    const selectValue = ref(props.options.status);
    watch(selectValue, () => {
      setStatus(props.options.id, selectValue.value);
    });
    return {
      selectValue,
    };
  },
};
</script>

<style lang="scss" scoped>
.flex-wrapper {
  display: flex;
  align-items: center;
}
svg {
  cursor: pointer;
  path {
    transition-duration: 0.2s;
  }
  &:hover {
    path {
      fill: #465c0a;
    }
  }
}
.copy-svg {
  margin-right: 18px;
  margin-left: 22px;
}
td {
  vertical-align: top;
  &.ID {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #2a341d;
  }
  padding-top: 15px;
  padding-bottom: 10px;
  border-top: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
  font-weight: 800;
  font-size: 18px;
  line-height: 21px;
  color: #7ea613;
  background-color: #fff;
}
td + td,
td:first-child {
  padding-right: 34px;
}
td:last-child {
  padding-right: 16px;
  border-radius: 0 8px 8px 0;
  border-right: 1px solid #e8e8e8;
}
td:first-child {
  padding-left: 25px;
  border-radius: 8px 0 0 8px;
  border-left: 1px solid #e8e8e8;
}
</style>    